import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, SignJWT } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'default-secret'
);

const generateAccessToken = async (adminId: string): Promise<string> => {
  return await new SignJWT({ adminId })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('15m')
    .sign(secret);
};

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token is required' },
        { status: 400 }
      );
    }

    try {
      const verified = await jwtVerify(refreshToken, secret);
      const payload = verified.payload as { adminId: string; type: string };

      if (payload.type !== 'refresh') {
        return NextResponse.json(
          { error: 'Invalid refresh token' },
          { status: 401 }
        );
      }

      const newAccessToken = await generateAccessToken(payload.adminId);

      return NextResponse.json(
        {
          message: 'Token refreshed successfully',
          accessToken: newAccessToken,
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid refresh token' },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.error('Token refresh error:', error);
    return NextResponse.json(
      { error: error.message || 'Token refresh failed' },
      { status: 500 }
    );
  }
}

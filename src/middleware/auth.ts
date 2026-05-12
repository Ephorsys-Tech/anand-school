import { jwtVerify } from 'jose';
import { NextRequest } from 'next/server';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'default-secret'
);

export interface JWTPayload {
  adminId: string;
  type?: string;
  iat?: number;
  exp?: number;
}

export interface AuthResponse {
  valid: boolean;
  error?: string;
  payload?: JWTPayload;
}

export async function verifyAuth(request: NextRequest): Promise<AuthResponse> {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return { valid: false, error: 'No authorization header' };
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return { valid: false, error: 'Invalid authorization header format' };
  }

  const token = parts[1];

  if (!token) {
    return { valid: false, error: 'No token provided' };
  }

  try {
    const verified = await jwtVerify(token, secret);
    const payload = verified.payload as unknown as JWTPayload;

    // Ensure it's not a refresh token
    if (payload.type === 'refresh') {
      return { valid: false, error: 'Cannot use refresh token for access' };
    }

    return { valid: true, payload };
  } catch (err) {
    return { valid: false, error: 'Invalid or expired token' };
  }
}

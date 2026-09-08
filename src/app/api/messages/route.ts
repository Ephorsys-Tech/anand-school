import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyAuth } from '@/middleware/auth';
import { contactMessageSchema } from '@/lib/validations/message';

// GET messages with pagination (Admin only, default 20 per page)
export async function GET(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);

    if (!auth.valid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.max(1, parseInt(searchParams.get('limit') || '20', 10));
    const skip = (page - 1) * limit;

    const totalMessages = await Message.countDocuments();
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalMessages / limit) || 1;

    return NextResponse.json(
      {
        message: 'Messages fetched successfully',
        data: messages,
        pagination: {
          total: totalMessages,
          page,
          limit,
          totalPages,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch messages error:', error);

    return NextResponse.json(
      { error: error.message || 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// POST - Create message (Public, with Zod validation)
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Zod Backend Validation
    const validation = contactMessageSchema.safeParse(body);
    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message || 'Invalid input data' },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validation.data;

    const newMessage = await Message.create({
      name,
      email: email || undefined,
      phone,
      message,
    });

    return NextResponse.json(
      {
        message: 'Message sent successfully',
        data: newMessage,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create message error:', error);

    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}
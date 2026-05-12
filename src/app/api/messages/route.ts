import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyAuth } from '@/middleware/auth';

// GET all messages (Admin only)
export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const auth = await verifyAuth(request);

    if (!auth.valid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const messages = await Message.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: 'Messages fetched successfully',
        data: messages,
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

// POST - Create message (Public)
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email, phone, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone and message are required' },
        { status: 400 }
      );
    }

    const newMessage = await Message.create({
      name,
      email,
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

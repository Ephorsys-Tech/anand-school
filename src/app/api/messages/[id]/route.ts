import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyAuth } from '@/middleware/auth';
import { Types } from 'mongoose';

// DELETE - Delete message (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid message ID' },
        { status: 400 }
      );
    }

    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Message deleted successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Delete message error:', error);

    return NextResponse.json(
      { error: error.message || 'Failed to delete message' },
      { status: 500 }
    );
  }
}
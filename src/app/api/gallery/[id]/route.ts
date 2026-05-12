import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import { verifyAuth } from '@/middleware/auth';
import { Types } from 'mongoose';

// GET single gallery item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid gallery ID' },
        { status: 400 }
      );
    }

    const gallery = await Gallery.findById(id);

    if (!gallery) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Gallery item fetched successfully',
        data: gallery,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch single gallery error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch gallery item' },
      { status: 500 }
    );
  }
}

// PUT - Update gallery item (Admin only)
export async function PUT(
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
        { error: 'Invalid gallery ID' },
        { status: 400 }
      );
    }

    const { imageUrl, category } = await request.json();

    const gallery = await Gallery.findByIdAndUpdate(
      id,
      { imageUrl, category },
      { new: true, runValidators: true }
    );

    if (!gallery) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Gallery item updated successfully',
        data: gallery,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update gallery error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update gallery item' },
      { status: 500 }
    );
  }
}

// DELETE - Delete gallery item (Admin only)
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
        { error: 'Invalid gallery ID' },
        { status: 400 }
      );
    }

    const gallery = await Gallery.findByIdAndDelete(id);

    if (!gallery) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Gallery item deleted successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Delete gallery error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete gallery item' },
      { status: 500 }
    );
  }
}

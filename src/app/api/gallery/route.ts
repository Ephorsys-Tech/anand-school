import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import { verifyAuth } from '@/middleware/auth';

// GET all gallery items
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const gallery = await Gallery.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: 'Gallery items fetched successfully',
        data: gallery,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch gallery error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
}

// POST - Create gallery item (Admin only)
export async function POST(request: NextRequest) {
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

    const { imageUrl, category } = await request.json();

    if (!imageUrl || !category) {
      return NextResponse.json(
        { error: 'Image URL and Category are required' },
        { status: 400 }
      );
    }

    const gallery = await Gallery.create({
      imageUrl,
      category,
    });

    return NextResponse.json(
      {
        message: 'Gallery item created successfully',
        data: gallery,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create gallery error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create gallery item' },
      { status: 500 }
    );
  }
}

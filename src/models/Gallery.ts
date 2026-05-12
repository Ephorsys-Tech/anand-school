import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  imageUrl: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema: Schema = new Schema(
  {
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image URL'],
    },
    category: {
      type: String,
      enum: ['event', 'activity', 'achievement'],
      default: 'activity',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.Gallery) {
  delete mongoose.models.Gallery;
}

export default mongoose.model<IGallery>('Gallery', GallerySchema);

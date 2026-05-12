import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email?: string;
  phone: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
    },
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.Message) {
  delete mongoose.models.Message;
}

export default mongoose.model<IMessage>('Message', MessageSchema);

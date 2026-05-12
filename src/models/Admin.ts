import mongoose, { Schema, Document } from 'mongoose';
import bcryptjs from 'bcryptjs';

export interface IAdmin extends Document {
  email: string;
  password: string;
  createdAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const AdminSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false, // Don't return password by default
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
AdminSchema.pre('save', async function (this: IAdmin, next) {
  if (!this.isModified('password')) {
    return;
  }

  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

// Compare password method
AdminSchema.methods.comparePassword = async function (this: IAdmin, enteredPassword: string) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

export default mongoose.models.Admin ||
  mongoose.model<IAdmin>('Admin', AdminSchema);

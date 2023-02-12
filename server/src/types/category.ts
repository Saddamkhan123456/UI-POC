import mongoose from 'mongoose';

export interface Category {
  title: string;
  banner: string;
  thumbnail: string;
  isActive: boolean;
  createdBy: mongoose.Schema.Types.ObjectId;
  updateBy: mongoose.Schema.Types.ObjectId;
}

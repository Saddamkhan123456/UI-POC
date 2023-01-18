import mongoose from 'mongoose';

export interface Category {
  title: string;
  isActive: boolean;
  user: mongoose.Schema.Types.ObjectId;
}

import mongoose from 'mongoose';

export interface Brand {
  title: string;
  image: string;
  isActive: boolean;
  createdBy: mongoose.Schema.Types.ObjectId;
  updateBy: mongoose.Schema.Types.ObjectId;
}

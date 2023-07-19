import mongoose, { Schema, model } from 'mongoose';
import { Category } from '../types/category';

const categorySchema = new Schema<Category>(
  {
    title: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    updateBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = model('Category', categorySchema);

export default CategoryModel;

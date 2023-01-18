import mongoose, { Schema, model } from 'mongoose';
import { Category } from '../interfaces/category.interface';

const categorySchema = new Schema<Category>({
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const CategoryModel = model('Category', categorySchema);

export default CategoryModel;

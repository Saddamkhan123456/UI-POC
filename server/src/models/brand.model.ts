import mongoose, { Schema, model } from 'mongoose';
import { Brand } from '../types/brand';

const brandSchema = new Schema<Brand>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
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

const BrandModel = model('Brand', brandSchema);

export default BrandModel;

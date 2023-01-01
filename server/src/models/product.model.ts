import mongoose, { Schema, model } from 'mongoose';
import { Product } from '../types/product';

const productSchema = new Schema<Product>(
  {
    title: {
      type: String,
      text: true,
      trim: true,
      required: true,
    },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    SKU: { type: String, required: true },
    price: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    images: [{ img: { type: String } }],
    quantity: { type: Number, required: true },
    sold: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model('Product', productSchema);

export default ProductModel;

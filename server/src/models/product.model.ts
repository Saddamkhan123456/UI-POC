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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
    SKU: { type: String },
    price: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    color: {
      type: String,
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

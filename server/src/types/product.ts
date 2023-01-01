import mongoose, { Document } from 'mongoose';

export interface Product extends Document {
  title: string;
  slug: string;
  description: string;
  price: number;
  salePrice: number;
  brand: string;
  SKU: String;
  quantity: number;
  sold: number;
  color: string;
  images: [];
  category: mongoose.Schema.Types.ObjectId;
  createdBy: mongoose.Schema.Types.ObjectId;
  updatedBy: mongoose.Schema.Types.ObjectId;
  isActive: boolean;
}

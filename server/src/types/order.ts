import mongoose from 'mongoose';

export interface Order {
  name: string;
  mobile: number;
  address: string;
  products: Product[];
  paymentIntent: {};
  orderStatus: String;
  totalAmount: number;
  totalTax: number;
  finalAmountAfterTax: number;
  oderBy: mongoose.Schema.Types.ObjectId;
}

export interface Product {
  product: mongoose.Schema.Types.ObjectId;
  quantity: Number;
  price: Number;
}

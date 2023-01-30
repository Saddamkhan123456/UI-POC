import mongoose, { Schema, model } from 'mongoose';
import { Cart } from '../types/user';

const CartSchema = new Schema<Cart>(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: Number,
        price: Number,
      },
    ],
    cartTotal: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const CartModel = model('Cart', CartSchema);
export default CartModel;

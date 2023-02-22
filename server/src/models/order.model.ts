import mongoose, { Schema, model } from 'mongoose';
import { Order } from '../types/order';

const orderSchema = new Schema<Order>(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
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
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: 'Not Processed',
      enum: [
        'Not Processed',
        'Cash on Delivery',
        'Processing',
        'Dispatched',
        'Cancelled',
        'Delivered',
      ],
    },
    oderBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = model('Order', orderSchema);

export default OrderModel;

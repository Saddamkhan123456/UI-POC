import { Schema } from 'mongoose';
import { Auth } from './auth';

export interface User extends Auth {
  name: string;
  email: string;
  mobile: string;
  password: string;
  address: string;
  wishlist: any[];
  cart: any[];
  role: 'USER' | 'ADMIN';
}

export interface Cart {
  products: any[];
  cartTotal: number;
  user: Schema.Types.ObjectId;
}

import mongoose, { Schema, model } from 'mongoose';
import { User } from '../types/user';

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    role: {
      type: String,
      default: 'USER',
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model('User', UserSchema);
export default UserModel;

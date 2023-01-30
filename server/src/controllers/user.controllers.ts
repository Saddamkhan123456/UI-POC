import { NextFunction, Response } from 'express';
import { RequestExt } from '../types/req-ext';
import UserModel from '../models/user.model';
import { BadRequestError } from '../errors';
import joi from 'joi';
import { User } from '../types/user';
import CartModel from '../models/cart.model';
import ProductModel from '../models/product.model';
const updateProfile = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const profile = await UserModel.findById({ _id: req.user?.id })
      .select('-password')
      .exec();
    if (profile) {
      res.status(201);
      res.json({ profile });
      return;
    }
    return next(new BadRequestError('No user found!'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const addToWishlist = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = joi.object({
      productId: joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { productId } = value;
    const user = await UserModel.findById({ _id: req.user?.id });
    const allreadyAdded = user?.wishlist.find(
      (id: string) => id.toString() === productId
    );
    if (allreadyAdded) {
      let user = await UserModel.findByIdAndUpdate(
        { _id: req.user?.id },
        {
          $pull: { wishlist: productId },
        },
        { new: true }
      );
      res.status(201).json(user);
    } else {
      let user = await UserModel.findByIdAndUpdate(
        { _id: req.user?.id },
        {
          $push: { wishlist: productId },
        },
        { new: true }
      );
      res.status(201).json(user);
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const getUserWishlist = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserModel.findById({ _id: req.user?.id })
      .select('name email mobile wishlist')
      .populate('wishlist');
    if (user) {
      res.status(201).json(user);
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const addToCart = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = joi.object({
      products: joi.array().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { products } = value;
    let newProducts: any = [];
    const allreadyExists = await CartModel.findOne({ user: req.user?.id });
    if (allreadyExists) {
      allreadyExists.remove();
    }
    for (let i = 0; i < products.length; i++) {
      let obj: any = {};
      obj.product = products[i].product;
      obj.quantity = products[i].quantity;
      let getPrice = await ProductModel.findById({
        _id: products[i].product,
      })
        .select('price')
        .exec();
      obj.price = getPrice?.price;
      newProducts.push(obj);
    }
    let cartTotal: number = 0;
    for (let i = 0; i < newProducts.length; i++) {
      cartTotal = cartTotal + newProducts[i].price * newProducts[i].quantity;
    }
    let newCart = await new CartModel({
      products,
      cartTotal,
      user: req.user?.id,
    }).save();
    if (newCart) {
      res.status(201).json(newCart);
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const getUserCart = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await CartModel.findOne({ user: req.user?.id }).populate(
      'products.product'
    );
    if (cart) {
      res.status(201).json(cart);
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const emptyUserCart = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await CartModel.findOneAndRemove({ user: req.user?.id });
    res.status(201).json(cart);
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

export {
  updateProfile,
  addToWishlist,
  getUserWishlist,
  addToCart,
  getUserCart,
  emptyUserCart,
};

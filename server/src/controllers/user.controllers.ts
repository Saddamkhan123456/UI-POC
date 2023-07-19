import { NextFunction, Response } from 'express';
import { RequestExt } from '../types/req-ext';
import UserModel from '../models/user.model';
import { BadRequestError } from '../errors';
import joi from 'joi';
import { User } from '../types/user';
import CartModel from '../models/cart.model';
import ProductModel from '../models/product.model';

const getProfile = async (
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

const updateProfile = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = joi.object({
      name: joi.string(),
      address: joi.string(),
      mobile: joi.number(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
      return next(new BadRequestError(result.error.details[0].message));
    }
    let { name, address, mobile } = result.value;

    const user = await UserModel.findByIdAndUpdate(
      { _id: req.user?.id },
      { name, address, mobile },
      { new: true }
    );
    if (user) {
      res.status(201);
      res.json(user);
    }
    return next(new BadRequestError('Problem while updating user !'));
  } catch (error) {
    return next(new Error('Somthing went wrong!'));
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
      .populate({
        path: 'wishlist',
        populate: { path: 'brand' },
      });
    if (user) {
      res.status(201).json(user);
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const removeFromWishlist = async (
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
    const wishlist = await UserModel.findByIdAndUpdate(
      { _id: req.user?.id },
      {
        $pull: { wishlist: productId },
      },
      { new: true }
    );
    if (wishlist) {
      res.status(201).json(true);
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
    const allreadyExists = await CartModel.findOne({ user: req.user?.id });
    if (allreadyExists) {
      //if cart already exists then update cart by quantity
      let cart;
      products.forEach(async (item: any) => {
        const product = item.product;
        const filteredItem = allreadyExists?.products?.find(
          (c: any) => c.product == product
        );
        if (filteredItem) {
          filteredItem.quantity = filteredItem.quantity + item.quantity;
          cart = await CartModel.findOneAndUpdate(
            { user: req.user?.id, 'products.product': product },
            {
              $set: {
                'products.$': filteredItem,
              },
            },
            { new: true }
          );
        } else {
          let obj: any = {};
          obj.product = item.product;
          obj.quantity = item.quantity;
          let getPrice = await ProductModel.findById({
            _id: item.product,
          })
            .select('price')
            .exec();
          obj.price = getPrice?.price;
          cart = await CartModel.findOneAndUpdate(
            { user: req.user?.id },
            {
              $push: {
                products: obj,
              },
            },
            { new: true }
          );
        }
        if (cart) {
          res.status(201).json(cart);
        }
      });
    } else {
      //if cart not exist then create a new cart
      let newProducts: any = [];
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
      const cart = await new CartModel({
        user: req.user?.id,
        products: newProducts,
      }).save();
      if (cart) {
        res.status(201).json(cart);
      }
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
    } else {
      res.status(201).json('your Cart is empty');
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const removeCartItem = async (
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
    const cart = await CartModel.findOneAndUpdate(
      { user: req.user?.id },
      {
        $pull: {
          products: {
            product: productId,
          },
        },
      },
      { new: true }
    );
    if (cart) {
      res.status(201).json(true);
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
    const cart = await CartModel.findOneAndRemove(
      { user: req.user?.id },
      { new: true }
    );
    res.status(201).json('Cart is empty!');
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

export {
  updateProfile,
  getProfile,
  addToWishlist,
  getUserWishlist,
  addToCart,
  getUserCart,
  emptyUserCart,
  removeCartItem,
  removeFromWishlist,
};

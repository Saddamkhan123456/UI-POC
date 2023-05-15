import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import { BadRequestError } from '../errors';
import CartModel from '../models/cart.model';
import OrderModel from '../models/order.model';
import { RequestExt } from '../types/req-ext';
import { v4 as uuidv4 } from 'uuid';
let myuuid = uuidv4();

const createOrder = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = joi.object({
      name: joi.string().required(),
      address: joi.string().required(),
      mobile: joi.number().required(),
      COD: joi.boolean(),
      totalAmount: joi.number().required(),
      totalTax: joi.number().required(),
      finalAmountAfterTax: joi.number().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
      return next(new BadRequestError(result.error.details[0].message));
    }
    let {
      name,
      address,
      mobile,
      COD,
      totalAmount,
      totalTax,
      finalAmountAfterTax,
    } = result.value;
    if (!COD) {
      return next(new BadRequestError('COD is required!'));
    }
    let userCart = await CartModel.findOne({ user: req.user?.id });
    if (userCart) {
      let finalAmount = userCart.products.reduce((sum, item) => {
        sum = sum + item.price * item.quantity;
      }, 0);
      let newOrder = await new OrderModel({
        name,
        mobile,
        address,
        products: userCart.products,
        paymentIntent: {
          id: myuuid,
          method: 'COD',
          finalAmountAfterTax,
          orderStatus: 'Cash on Delivery',
          created: Date.now(),
          currency: 'INR',
        },
        totalAmount,
        totalTax,
        finalAmountAfterTax,
        oderBy: req.user?.id,
      }).save();
      if (newOrder) {
        const cart = await CartModel.findOneAndRemove(
          { user: req.user?.id },
          { new: true }
        );
        if (cart) {
          return res.status(201).json('Your order placed successfully!');
        }
        return next(new BadRequestError('Problem while placing oreder!'));
      }
      return next(new BadRequestError('Problem while oreder!'));
    }
    return next(new BadRequestError(`User doesn't have anything in cart!`));
  } catch (error) {
    return next(new Error('Somthing went wrong!'));
  }
};

const getOrderByUser = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await OrderModel.find({ user: req.user?.id })
      .populate('products.product', 'images title')
      .exec();
    if (orders) {
      res.status(201);
      res.json(orders);
      return;
    }
    return next(new BadRequestError('No orders found!'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

export { createOrder, getOrderByUser };

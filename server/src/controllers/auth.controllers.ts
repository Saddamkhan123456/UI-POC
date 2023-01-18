import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import UserModel from '../models/user.model';
import { encrypt } from '../utils/bcrypt.handle';

const registerCtrl = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    confirm_password: joi.string().required(),
    address: joi.string().required(),
    mobile: joi.string().required(),
  });
  const result = schema.validate(body);

  if (result.error) {
    res.status(400);
    return next(new Error(result.error.details[0].message));
  }
  let { name, email, password, confirm_password, address, mobile } =
    result.value;

  if (password !== confirm_password) {
    res.status(400);
    return next(new Error('Password and confirm password must be same !'));
  }
  let user;
  user = await UserModel.findOne({ email }).exec();
  if (user) {
    res.status(400);
    return next(new Error('User Allready exists !'));
  }
  const hashPassword = await encrypt(password);
  user = await UserModel.create({
    name,
    email,
    address,
    mobile,
    password: hashPassword,
  });
  if (user) {
    res.status(201);
    return res.json({ message: 'User registered successfully !' });
  }
  res.status(400);
  return next(new Error('Problem while creating user !'));
};

const loginCtrl = async (req: Request, res: Response, next: NextFunction) => {
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400);
    return next(new Error(result.error.details[0].message));
  }
  const { email, password } = result.value;
  const user = await UserModel.findOne({ email }).exec();
  if (user) {
    res.status(201);
    return res.json({ user: user });
  }
  res.status(400);
  return next(new Error(`${email} not found !`));
};

export { registerCtrl, loginCtrl };

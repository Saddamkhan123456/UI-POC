import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import { BadRequestError } from '../errors';
import UserModel from '../models/user.model';
import { encrypt, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';

const registerCtrl = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
      return next(new BadRequestError(result.error.details[0].message));
    }
    let { name, email, password, confirm_password, address, mobile } =
      result.value;
    if (password !== confirm_password) {
      return next(
        new BadRequestError('Password and confirm password must be same !')
      );
    }
    let user;
    user = await UserModel.findOne({ email }).exec();
    if (user) {
      return next(new BadRequestError('User Allready exists !'));
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
      const payload = {
        id: user?._id,
        email,
        name: user?.name,
        role: user?.role,
        telephone: user?.mobile,
      };
      const token = generateToken(payload);
      if (token) {
        res.status(201);
        return res.json({ token, payload });
      }
    }
    return next(new BadRequestError('Problem while creating user !'));
  } catch (error) {
    return next(new Error('Somthing went wrong!'));
  }
};

const loginCtrl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
      return next(new BadRequestError(result.error.details[0].message));
    }
    const { email, password } = result.value;
    const user = await UserModel.findOne({ email }).exec();
    if (user) {
      let isMatched = await verified(password, user?.password || '');
      if (isMatched) {
        const payload = {
          id: user?._id,
          email,
          name: user?.name,
          role: user?.role,
          telephone: user?.mobile,
        };
        const token = generateToken(payload);
        if (token) {
          res.status(201);
          return res.json({ token, payload });
        }
      }
      return next(new BadRequestError(`Incorrect credentials!`));
    }
    return next(new BadRequestError(`Incorrect credentials!`));
  } catch (error) {
    return next(new Error('Somthing went wrong!'));
  }
};

export { registerCtrl, loginCtrl };

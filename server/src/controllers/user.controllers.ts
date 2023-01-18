import { NextFunction, Response } from 'express';
import { RequestExt } from '../types/req-ext';
import UserModel from '../models/user.model';
import { BadRequestError } from '../errors';
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

export { updateProfile };

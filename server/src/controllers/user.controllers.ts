import { NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/req-ext';
import UserModel from '../models/user.model';
const updateProfile = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  const profile = await UserModel.findById({ _id: req.user?.id })
    .select('-password')
    .exec();
  if (profile) {
    res.status(201);
    res.json({ profile });
    return;
  }
  res.status(400);
  return next(new Error('No user found!'));
};

export { updateProfile };

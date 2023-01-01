import { NextFunction, Response } from 'express';
import { NotAuthorizedError } from '../errors';
import { RequestExt } from '../types/req-ext';
import { verifyToken } from '../utils/jwt.handle';

export const userAuthMiddleware = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const bearerToken = req.headers.authorization;
      let token = bearerToken.split(' ')[1];
      const payload = verifyToken(token) as { id: string };
      if (!payload) {
        return next(new NotAuthorizedError());
      } else {
        req.user = payload;
        next();
      }
    } catch (error) {
      return next(new Error('Session is invalid!'));
    }
  } else {
    return next(new NotAuthorizedError());
  }
};

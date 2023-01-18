import { NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/req-ext';
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
        res.status(401);
        res.send('Unauthorized user!');
      } else {
        req.user = payload;
        next();
      }
    } catch (error) {
      res.status(401);
      return next(new Error('Session is invalid!'));
    }
  }
};

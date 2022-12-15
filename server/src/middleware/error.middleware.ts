import { Response, Request, NextFunction } from 'express';

function handleErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (res.statusCode === 201) {
      res.statusCode = 500;
    }
    res.json({ error: error.message || 'Somthing went wrong !' });
  } catch (error) {
    next();
  }
}

module.exports = handleErrors;

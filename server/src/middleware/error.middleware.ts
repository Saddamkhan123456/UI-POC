import { Response, Request, NextFunction } from 'express';
import { CustomError } from '../errors';

const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .json({ errors: error.generateErrors(), stack: error.stack });
  }
  res
    .status(500)
    .json({ errors: [{ message: 'somthing went wrong', stack: error.stack }] });
};

export { handleErrors };

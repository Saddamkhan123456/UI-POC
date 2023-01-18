import { CustomError } from './customeError';

export class NotAuthorizedError extends CustomError {
  statusCode = 404;
  constructor() {
    super('not authorized!');
  }
  generateErrors() {
    return [{ message: 'not authorized!' }];
  }
}

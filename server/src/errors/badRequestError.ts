import { CustomError } from './customeError';

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(public message: string) {
    super(message);
  }
  generateErrors() {
    return [{ message: this.message }];
  }
}

import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
import { User } from './user';

export interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
}

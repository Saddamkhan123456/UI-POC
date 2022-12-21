import { sign, verify } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';
const JWT_KEY = process.env.JWT_KEY || 'token.01010101';

const generateToken = (payload: any) => {
  const jwt = sign(payload, JWT_KEY, {
    expiresIn: '2d',
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_KEY);
  return isOk;
};

export { generateToken, verifyToken };

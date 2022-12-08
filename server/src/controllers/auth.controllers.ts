import { Request, Response } from 'express';
import { registerNewUser } from '../services/auth.service';

const testingCtrl = (req: Request, res: Response) => {
  res.json({ message: 'Testing url working fine' });
};

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

export { registerCtrl, testingCtrl };

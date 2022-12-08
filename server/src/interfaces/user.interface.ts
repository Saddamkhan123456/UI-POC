import { Auth } from './auth.interface';

export interface User extends Auth {
  name: string;
  mobile: string;
  address: string;
  role: string;
}

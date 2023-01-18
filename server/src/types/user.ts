import { Auth } from './auth';

export interface User extends Auth {
  name: string;
  mobile: string;
  address: string;
  role: 'USER' | 'ADMIN';
}

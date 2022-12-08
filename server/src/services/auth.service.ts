import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

const registerNewUser = async ({
  name,
  email,
  password,
  mobile,
  address,
}: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return 'ALREADY_USER';
  const registerNewUser = await UserModel.create({
    name,
    email,
    password,
    mobile,
    address,
  });
  return registerNewUser;
};

export { registerNewUser };

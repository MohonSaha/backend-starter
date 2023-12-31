import { IUser } from './example.interface';
import { User } from './example.model';

const createUserIntoDB = async (student: IUser) => {
  const result = await User.create(student);
  return result;
};

export const UserService = {
  createUserIntoDB,
};

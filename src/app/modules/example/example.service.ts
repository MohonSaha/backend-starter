import { IUser } from './example.interface';
import { User } from './example.model';

const createUserIntoDB = async (student: IUser) => {
  const result = await User.create(student);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUsersFromDB = async (_id: string) => {
  const result = await User.find({ _id });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
};

import { UserService } from './example.service';
import { UserValidations } from './example.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const { user } = req.body;

  // validate data through zod
  const zodParsedData = UserValidations.userValidationSchema.parse(user);
  const result = await UserService.createUserIntoDB(zodParsedData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserService.getAllUsersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrived successfully',
    data: result,
  });
});

const getSingleUsers = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await UserService.getSingleUsersFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single User retrived successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
};

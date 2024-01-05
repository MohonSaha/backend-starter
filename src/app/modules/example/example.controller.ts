/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { UserService } from './example.service';
import { UserValidations } from './example.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllUsersFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrived successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await UserService.getSingleUsersFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single User retrived successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
};

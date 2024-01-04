/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserService } from './example.service';
import { UserValidations } from './example.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    // validate data through zod
    const zodParsedData = UserValidations.userValidationSchema.parse(user);

    const result = await UserService.createUserIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Somethign went wrong',
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'User retrived successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Somethign went wrong',
      error: err,
    });
  }
};

const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await UserService.getSingleUsersFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Single User retrived successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Somethign went wrong',
      error: err,
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
};

import express from 'express';
import { UserControllers } from './example.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './example.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidations.createUserValidationSchema),
  UserControllers.createUser
);
router.get('/', UserControllers.getAllUsers);
router.get('/:id', UserControllers.getSingleUsers);

export const UserRoutes = router;

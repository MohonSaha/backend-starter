import express from 'express';
import { UserControllers } from './example.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:id', UserControllers.getSingleUsers);

export const UserRoutes = router;

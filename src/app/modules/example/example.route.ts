import express from 'express';
import { UserControllers } from './example.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);

export const UserRoutes = router;
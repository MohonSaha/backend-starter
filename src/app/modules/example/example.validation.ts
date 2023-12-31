import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  email: z.string(),
  avatar: z.string(),
  role: z.enum(['user', 'admin']),
});

export const UserValidations = {
  userValidationSchema,
};

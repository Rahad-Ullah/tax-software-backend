import { z } from 'zod';
import { USER_ROLES, USER_STATUS } from '../../../enums/user';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
    contact: z.string({ required_error: 'Contact is required' }).optional(),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    role: z.nativeEnum(USER_ROLES).optional(),
    contact: z.string().optional(),
    dob: z.string().optional(),
    accountNo: z.string().optional(),
    transitNo: z.string().optional(),
    institutionNo: z.string().optional(),
    balance: z.number().optional(),
    homeAddress: z.string().optional(),
    bankAddress: z.string().optional(),
    taxNo: z.string().optional(),
    image: z.string().optional(),
    status: z.nativeEnum(USER_STATUS).optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};

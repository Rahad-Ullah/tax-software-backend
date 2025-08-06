import { Model } from 'mongoose';
import { USER_ROLES, USER_STATUS } from '../../../enums/user';

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
  contact: string;
  dob: Date;
  accountNo: string;
  transitNo: string;
  institutionNo: string;
  balance: number;
  homeAddress: string;
  bankAddress: string;
  taxNo: string;
  image?: string;
  status: USER_STATUS;
  verified: boolean;
  authentication?: {
    isResetPassword: boolean;
    oneTimeCode: number;
    expireAt: Date;
  };
};

export type UserModal = {
  isExistUserById(id: string): any;
  isExistUserByEmail(email: string): any;
  isMatchPassword(password: string, hashPassword: string): boolean;
} & Model<IUser>;

import { Model, Types } from 'mongoose';

export type IFeedback = {
  _id?: string;
  user: Types.ObjectId;
  rating: number;
  message: string;
};

export type FeedbackModel = Model<IFeedback>;

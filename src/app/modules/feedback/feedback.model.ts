import { Schema, model } from 'mongoose';
import { IFeedback, FeedbackModel } from './feedback.interface';

const feedbackSchema = new Schema<IFeedback, FeedbackModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Feedback = model<IFeedback, FeedbackModel>(
  'Feedback',
  feedbackSchema
);

import QueryBuilder from '../../builder/QueryBuilder';
import { IFeedback } from './feedback.interface';
import { Feedback } from './feedback.model';

// -------------- create feedback --------------
const createFeedback = async (payload: IFeedback) => {
  const result = await Feedback.create(payload);
  return result;
};

// -------------- get all feedback --------------
const getAllFeedback = async (query: Record<string, unknown>) => {
  const feedbackQuery = new QueryBuilder(Feedback.find(), query)
    .paginate()
    .filter()
    .sort();

  const [feedbacks, pagination] = await Promise.all([
    feedbackQuery.modelQuery.lean(),
    feedbackQuery.getPaginationInfo(),
  ]);
  return { feedbacks, pagination };
};

export const FeedbackServices = { createFeedback, getAllFeedback };

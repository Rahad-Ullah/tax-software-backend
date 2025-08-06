import { Request, Response, NextFunction } from 'express';
import { FeedbackServices } from './feedback.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

// create feedback
const createFeedback = catchAsync(async (req: Request, res: Response) => {
  const payload = { ...req.body, user: req.user.id };

  const result = await FeedbackServices.createFeedback(payload);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Feedback created successfully',
    data: result,
  });
});

// get all feedback
const getAllFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackServices.getAllFeedback(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Feedback fetched successfully',
    data: result.feedbacks,
    pagination: result.pagination,
  });
});

export const FeedbackController = { createFeedback, getAllFeedback };

import express from 'express';
import { FeedbackController } from './feedback.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbackValidations } from './feedback.validation';

const router = express.Router();

router.post(
  '/create',
  auth(),
  validateRequest(FeedbackValidations.createFeedbackZodSchema),
  FeedbackController.createFeedback
);

router.get('/', FeedbackController.getAllFeedback);

export const FeedbackRoutes = router;

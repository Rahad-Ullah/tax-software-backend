import { z } from 'zod';

// create a schema for the feedback
const createFeedbackZodSchema = z.object({
  body: z.object({
    rating: z
      .number()
      .min(1, 'Rating must be greater than 0')
      .max(5, 'Rating must be maximum 5'),
    message: z.string().nonempty('Message cannot be empty'),
  }),
});

export const FeedbackValidations = { createFeedbackZodSchema };

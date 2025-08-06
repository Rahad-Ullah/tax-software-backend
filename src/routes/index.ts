import express from 'express';
import { AuthRoutes } from '../app/modules/auth/auth.route';
import { UserRoutes } from '../app/modules/user/user.route';
import { FeedbackRoutes } from '../app/modules/feedback/feedback.route';
const router = express.Router();

const apiRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/feedbacks',
    route: FeedbackRoutes,
  },
];

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;

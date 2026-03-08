import { Router } from 'express';
import { login, getMe } from '../controllers/authController';
import { authenticate } from '../middlewares/authMiddleware';
import { authLimiter } from '../middlewares/rateLimiter';
import { validate } from '../middlewares/validate';
import { loginSchema } from '../utils/validation';

const router = Router();

router.post('/login', authLimiter, validate(loginSchema), login);
router.get('/me', authenticate, getMe);

export default router;

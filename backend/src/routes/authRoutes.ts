import { Router } from 'express';
import { login, getMe } from '../controllers/authController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/login', login);
router.get('/me', authenticate, getMe);

export default router;

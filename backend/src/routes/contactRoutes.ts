import { Router } from 'express';
import { getContactMessages, createContactMessage, updateMessageStatus, deleteContactMessage } from '../controllers/contactController';
import { authenticate } from '../middlewares/authMiddleware';
import { validate } from '../middlewares/validate';
import { contactMessageSchema } from '../utils/validation';

const router = Router();

router.get('/', authenticate, getContactMessages);
router.post('/', validate(contactMessageSchema), createContactMessage);
router.put('/:id', authenticate, updateMessageStatus);
router.delete('/:id', authenticate, deleteContactMessage);

export default router;

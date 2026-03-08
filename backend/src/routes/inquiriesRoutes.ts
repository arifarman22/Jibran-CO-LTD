import { Router } from 'express';
import { getInquiries, createInquiry, updateInquiryStatus, deleteInquiry } from '../controllers/inquiriesController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authenticate, getInquiries);
router.post('/', createInquiry); // Public route for users to submit forms
router.put('/:id/status', authenticate, updateInquiryStatus);
router.delete('/:id', authenticate, deleteInquiry);

export default router;

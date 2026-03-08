import { Router } from 'express';
import { getSiteSettings, updateSiteSettings } from '../controllers/settingsController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getSiteSettings);
router.put('/', authenticate, updateSiteSettings);

export default router;

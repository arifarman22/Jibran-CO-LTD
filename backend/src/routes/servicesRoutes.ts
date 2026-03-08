import { Router } from 'express';
import { getServices, getServiceBySlug, createService, updateService, deleteService } from '../controllers/servicesController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getServices);
router.get('/:slug', getServiceBySlug);

router.post('/', authenticate, createService);
router.put('/:id', authenticate, updateService);
router.delete('/:id', authenticate, deleteService);

export default router;

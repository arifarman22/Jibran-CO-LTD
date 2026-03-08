import { Router } from 'express';
import { getProducts, getProductBySlug, createProduct, updateProduct, deleteProduct } from '../controllers/productsController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);

router.post('/', authenticate, createProduct);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

export default router;

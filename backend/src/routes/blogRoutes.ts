import { Router } from 'express';
import { getPosts, getPostBySlug, createPost, updatePost, deletePost } from '../controllers/blogController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);

router.post('/', authenticate, createPost);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

export default router;

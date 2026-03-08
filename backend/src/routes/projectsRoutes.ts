import { Router } from 'express';
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectsController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);

router.post('/', authenticate, createProject);
router.put('/:id', authenticate, updateProject);
router.delete('/:id', authenticate, deleteProject);

export default router;

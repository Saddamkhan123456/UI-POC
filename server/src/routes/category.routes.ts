import { Router } from 'express';
import {
  getAll,
  create,
  update,
  getById,
  remove,
} from '../controllers/category.controller';
import { userAuthMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', userAuthMiddleware, create);
router.put('/update', userAuthMiddleware, update);
router.put('/delete', userAuthMiddleware, remove);

export default router;

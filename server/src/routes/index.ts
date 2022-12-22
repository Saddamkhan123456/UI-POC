import { Router } from 'express';
const router = Router();

import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import categoryRoutes from './category.routes';

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);

export default router;

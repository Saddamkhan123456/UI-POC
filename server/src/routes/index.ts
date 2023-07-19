import { Router } from 'express';
const router = Router();
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import categoryRoutes from './category.routes';
import productRoutes from './product.routes';
import brandRoutes from './brand.routes';
import orderRoutes from './order.routes';

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/brand', brandRoutes);
router.use('/order', orderRoutes);

export default router;

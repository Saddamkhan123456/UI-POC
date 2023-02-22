import { Router } from 'express';
import { createOrder, getOrderByUser } from '../controllers/order.controller';
import { userAuthMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/cashOnDelivery', userAuthMiddleware, createOrder);
router.get('/orderByUser', userAuthMiddleware, getOrderByUser);

export default router;

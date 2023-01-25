import { Router } from 'express';
import {
  updateProfile,
  addToWishlist,
  getUserWishlist,
  addToCart,
  getUserCart,
  emptyUserCart,
} from '../controllers/user.controllers';
import { userAuthMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.get('/profile', userAuthMiddleware, updateProfile);
router.put('/wishlist', userAuthMiddleware, addToWishlist);
router.get('/wishlist', userAuthMiddleware, getUserWishlist);
router.post('/cart', userAuthMiddleware, addToCart);
router.get('/cart', userAuthMiddleware, getUserCart);
router.delete('/cart', userAuthMiddleware, emptyUserCart);

export default router;

import { Router } from 'express';
import {
  getProfile,
  updateProfile,
  addToWishlist,
  getUserWishlist,
  addToCart,
  getUserCart,
  emptyUserCart,
  removeCartItem,
  removeFromWishlist,
} from '../controllers/user.controllers';
import { userAuthMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.get('/profile', userAuthMiddleware, getProfile);
router.put('/profile/update', userAuthMiddleware, updateProfile);
router.put('/wishlist', userAuthMiddleware, addToWishlist);
router.put('/wishlist/remove', userAuthMiddleware, removeFromWishlist);
router.get('/wishlist', userAuthMiddleware, getUserWishlist);
router.post('/cart', userAuthMiddleware, addToCart);
router.get('/cart', userAuthMiddleware, getUserCart);
router.put('/cart', userAuthMiddleware, removeCartItem);
router.delete('/cart', userAuthMiddleware, emptyUserCart);

export default router;

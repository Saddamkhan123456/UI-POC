import { Router } from 'express';
import { updateProfile } from '../controllers/user.controllers';
import { userAuthMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.get('/profile', userAuthMiddleware, updateProfile);

export default router;

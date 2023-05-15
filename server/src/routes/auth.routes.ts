import { Router } from 'express';
import { registerCtrl, loginCtrl } from '../controllers/auth.controllers';

const router = Router();
router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

export default router;

import { Router } from 'express';
import { registerCtrl, testingCtrl } from '../controllers/auth.controllers';

const router = Router();
router.get('/testing', testingCtrl);
router.post('/register', registerCtrl);

export default router;

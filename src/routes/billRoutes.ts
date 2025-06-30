import { Router } from 'express';
import { calculateBill } from '../controllers/billController';

const router = Router();

router.post('/calculate-bill', calculateBill);

export default router;

import { Router } from 'express';
import { getPaymentHistoryForUserController, processNewPaymentController, getPaymentStatusController } from '../controllers/payment.controller';


const router = Router();

// Get all payment history for a user
router.get('/payments/history/:userId', getPaymentHistoryForUserController);

// Process a new payment
router.post('/payments/:userId', processNewPaymentController);

// Get payment status
router.get('/payments/status/:paymentId', getPaymentStatusController);

export default router;

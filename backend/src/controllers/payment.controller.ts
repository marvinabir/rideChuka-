import { Request, Response } from "express";
import {
  getPaymentHistoryForUser,
  processNewPayment,
  getPaymentStatus,
} from "../services/payment.service";

// Get all payment history for a user
export const getPaymentHistoryForUserController = async (
  req: Request,
  res: Response
) => {
  const { userId } = req.params;
  try {
    const payments = await getPaymentHistoryForUser(Number(userId));
    res.status(200).json(payments);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Process a new payment
export const processNewPaymentController = async (
  req: Request,
  res: Response
) => {
  const { userId } = req.params;
  const { amount } = req.body;
  try {
    const newPayment = await processNewPayment(Number(userId), Number(amount));
    res.status(201).json(newPayment);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get payment status
export const getPaymentStatusController = async (
  req: Request,
  res: Response
) => {
  const { paymentId } = req.params;
  try {
    const status = await getPaymentStatus(Number(paymentId));
    res.status(200).json(status);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

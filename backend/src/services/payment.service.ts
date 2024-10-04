import { PrismaClient, PaymentStatus } from '@prisma/client';

const prisma = new PrismaClient();

// Get all payment history for a user
export const getPaymentHistoryForUser = async (userId: number) => {
  return await prisma.payment.findMany({
    where: { userId },
    include: { user: true },
  });
};

// Process a new payment
export const processNewPayment = async (userId: number, amount: number) => {
  return await prisma.payment.create({
    data: {
      userId,
      amount,
      status: PaymentStatus.PENDING,
    },
  });
};

// Get payment status
export const getPaymentStatus = async (paymentId: number) => {
  return await prisma.payment.findUnique({
    where: { id: paymentId },
    select: { status: true },
  });
};

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all reviews for an event
export const getAllReviewsForEvent = async (eventId: number) => {
  return await prisma.review.findMany({
    where: { eventId },
    include: { user: true, event: true },
  });
};

// Add a review for an event
export const addReviewForEvent = async (userId: number, eventId: number, rating: number, comment?: string) => {
  return await prisma.review.create({
    data: {
      userId,
      eventId,
      rating,
      comment,
    },
  });
};

// Update a review
export const updateReview = async (reviewId: number, rating: number, comment?: string) => {
  return await prisma.review.update({
    where: { id: reviewId },
    data: { rating, comment },
  });
};

// Delete a review
export const deleteReview = async (reviewId: number) => {
  return await prisma.review.delete({
    where: { id: reviewId },
  });
};

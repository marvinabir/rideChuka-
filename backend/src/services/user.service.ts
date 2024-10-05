import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get user profile
export const getUserProfile = async (userId: number) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: {
      bookings: true,
      reviews: true,
      payments: true
    }
  });
};

// Update user profile (name, phone, profilePicture)
export const updateUserProfile = async (userId: number, data: { name?: string; phone?: string; profilePicture?: string }) => {
  return await prisma.user.update({
    where: { id: userId },
    data
  });
};

// Get all user bookings (events and bikes)
export const getUserBookings = async (userId: number) => {
  return await prisma.booking.findMany({
    where: { userId },
    include: {
      bike: true,
      event: true
    }
  });
};

// Get all user reviews
export const getUserReviews = async (userId: number) => {
  return await prisma.review.findMany({
    where: { userId },
    include: {
      event: true
    }
  });
};

// Deactivate user account
export const deactivateUserAccount = async (userId: number) => {
  return await prisma.user.update({
    where: { id: userId },
    data: { email: '', password: '', name: 'Deactivated User' }  // Removing sensitive information
  });
};

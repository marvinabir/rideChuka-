import { PrismaClient } from '@prisma/client';
import { BookingStatus } from '@prisma/client';

const prisma = new PrismaClient();

// Get all bookings
export const getAllBookings = async () => {
  return await prisma.booking.findMany({
    include: { user: true, bike: true, event: true },
  });
};

// Get details of a specific booking by ID
export const getBookingById = async (id: number) => {
  return await prisma.booking.findUnique({
    where: { id },
    include: { user: true, bike: true, event: true },
  });
};

// Create a new booking
export const createBooking = async (data: any) => {
  return await prisma.booking.create({
    data,
  });
};

// Update booking status
export const updateBookingStatus = async (id: number, status: BookingStatus) => {
  return await prisma.booking.update({
    where: { id },
    data: { status },
  });
};

// Cancel a booking
export const cancelBooking = async (id: number) => {
  return await prisma.booking.update({
    where: { id },
    data: { status: BookingStatus.CANCELLED },
  });
};

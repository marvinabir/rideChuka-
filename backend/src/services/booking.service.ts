import prisma from "../config/database";
import { BookingStatus } from '@prisma/client';


// Get all bookings
export const getAllBookings = async () => {
  return await prisma.booking.findMany({
    include: { user: true, bike: true, event: true },
  });
};

// Get details of a specific booking by ID
export const getBookingById = async (id: string) => {
  return await prisma.booking.findUnique({
    where: { id },
    include: { user: true, bike: true, event: true, ticket: true},
  });
};

// Create a new booking
export const createBooking = async (data: any) => {
  return await prisma.booking.create({
    data,
  });
};

// Update booking status
export const updateBookingStatus = async (id: string, status: BookingStatus) => {
  return await prisma.booking.update({
    where: { id },
    data: { status },
  });
};

// Cancel a booking
export const cancelBooking = async (id: string) => {
  return await prisma.booking.update({
    where: { id },
    data: { status: BookingStatus.CANCELLED },
  });
};

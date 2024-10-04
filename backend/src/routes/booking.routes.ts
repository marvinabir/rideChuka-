import { Router } from 'express';
import { getAllBookingsController, getBookingByIdController, createBookingController, updateBookingStatusController, cancelBookingController } from '../controllers/booking.controller';


const router = Router();

// Get all bookings
router.get('/bookings', getAllBookingsController);

// Get details of a specific booking
router.get('/bookings/:id', getBookingByIdController);

// Create a new booking
router.post('/bookings', createBookingController);

// Update booking status
router.put('/bookings/:id', updateBookingStatusController);

// Cancel a booking
router.put('/bookings/:id/cancel', cancelBookingController);

export default router;

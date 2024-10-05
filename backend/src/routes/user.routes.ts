import { Router } from 'express';
import { getUserProfileController, updateUserProfileController, getUserBookingsController, getUserReviewsController, deactivateUserAccountController, loginUserController, registerUserController } from '../controllers/user.controller';


const router = Router();

// Get user profile
router.get('/users/:userId', getUserProfileController);

// Update user profile (name, phone, profile picture)
router.put('/users/:userId', updateUserProfileController);

// Get all user bookings (events and bikes)
router.get('/users/:userId/bookings', getUserBookingsController);

// Get all user reviews
router.get('/users/:userId/reviews', getUserReviewsController);

// Deactivate user account
router.delete('/users/:userId', deactivateUserAccountController);

// Register user
router.post('/users/register', registerUserController);

// Login user
router.post('/users/login', loginUserController);

// // Send reset password code (via email)
// router.post('/users/reset-password/code', sendResetPasswordCodeController);

// // Reset password with code
// router.post('/users/reset-password', resetPasswordController);

export default router;


// import { authenticate } from '../middleware/auth.middleware';
// import { authorizeRoles } from '../middleware/role.middleware';

// // Protected route: Only authenticated users can access their profile
// router.get('/users/profile', authenticate, getUserProfileController);

// // Admin-only route: Only users with the "ADMIN" role can access this
// router.get('/admin/users', authenticate, authorizeRoles('ADMIN'), getAllUsersController);


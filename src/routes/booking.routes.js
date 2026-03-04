import { Router } from 'express';
import { handleBooking } from '../controllers/booking.controller.js';

const router = Router();

router.post('/idopontfoglalas', handleBooking);

export default router;

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const verifyToken = require('../middleware/authMiddleware'); 

router.post('/', verifyToken, bookingController.createBooking);
router.get('/', verifyToken, bookingController.getAllBookings);
router.delete('/byBookingId/:bookingId', verifyToken, bookingController.deleteByBookingId);
router.put('/byBookingId/:bookingId', verifyToken, bookingController.updateBookingByBookingId);

module.exports = router;

const Booking = require('../models/bookingModel');
const createBooking = async (req, res) => {
  try {
    const { name, email, phone, address, serviceType, date, time, bookingId } = req.body;

   
    if (!name || !email || !phone || !address || !serviceType || !date || !time || !bookingId) {
      return res.status(400).json({ message: "Missing required booking fields" });
    }

    const newBooking = new Booking({ name, email, phone, address, serviceType, date, time, bookingId });
    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Booking error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve bookings' });
  }
};

const deleteByBookingId = async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({ bookingId: req.params.bookingId });

    if (!booking) {
      return res.status(404).json({ message: 'Booking with that ID not found' });
    }

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete booking' });
  }
};

const updateBookingByBookingId = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const updates = req.body;

    const updatedBooking = await Booking.findOneAndUpdate(
      { bookingId },
      updates,
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking updated successfully", updatedBooking });
  } catch (error) {
    res.status(500).json({ message: "Failed to update booking" });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  deleteByBookingId,
  updateBookingByBookingId
};

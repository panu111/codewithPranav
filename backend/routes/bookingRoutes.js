const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");

console.log("Booking routes loaded");

// Create booking
router.post("/create", bookingController.createBooking);

// Get all bookings
router.get("/all", bookingController.getBookings);

// Delete booking
router.delete("/delete/:id", bookingController.deleteBooking);

// Update booking
router.put("/update/:id", bookingController.updateBooking);

//  Approve booking
router.put("/approve/:id", bookingController.approveBooking);

//  Reject booking
router.put("/reject/:id", bookingController.rejectBooking);

module.exports = router;
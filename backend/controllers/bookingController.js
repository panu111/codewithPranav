const Booking = require("../models/Booking");
const sendEmail = require("../utils/sendEmail");


// CREATE BOOKING
exports.createBooking = async (req, res) => {
  try {

    const booking = new Booking({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      service: req.body.service,
      date: req.body.date,
      status: "pending"
    });

    // Save booking in database
    await booking.save();

  
    // SEND EMAIL TO USER
  
    if (booking.email) {
      await sendEmail(
        booking.email,
        "Pooja Booking Confirmation",
        `Hello ${booking.name},

Your booking for ${booking.service} has been received.

Status: Pending Approval.

Pandit Ji will contact you soon.

🙏 धन्यवाद`
      );
    }

    // WHATSAPP MESSAGE
  
    const adminNumber = "918460846342";

    const message = `
🕉️ New Pooja Booking

Name: ${booking.name}
Phone: ${booking.phone}
Service: ${booking.service}
Date: ${booking.date}

Status: Pending Approval
`;

    const whatsappURL =
      `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;


    res.json({
      success: true,
      booking,
      whatsappURL
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

// GET ALL BOOKINGS
exports.getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

// DELETE BOOKING
exports.deleteBooking = async (req, res) => {
  try {

    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Booking deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

// UPDATE BOOKING
exports.updateBooking = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      booking
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

// APPROVE BOOKING
exports.approveBooking = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    res.json({
      success: true,
      booking
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

// REJECT BOOKING
exports.rejectBooking = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    res.json({
      success: true,
      booking
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    service: String,
    date: String,

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
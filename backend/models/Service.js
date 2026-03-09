const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  marathi: String,
  price: String,
  category: String,
  desc: String,
  image: String
});

module.exports = mongoose.model("Service", serviceSchema);
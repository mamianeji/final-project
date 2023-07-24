const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  name: String,
  product: String,
  number: String,
  date: String,
  prix: String,
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;

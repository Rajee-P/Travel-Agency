import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true }, // user email
  phone: { type: String, required: true },
  hotel: { type: String },
  date: { type: Date, required: true },
  travelers: { type: Number, default: 1 },
  requests: { type: String },
  destination: { type: String, required: true },
  status: { type: String, default: "Confirmed" }, // Confirmed / Cancelled
  paymentStatus: { type: String, default: "Pending" }, // Pending / Paid
  packagePrice: { type: Number, default: 0 },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

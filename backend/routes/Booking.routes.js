import express from "express";
import { createBooking, getUserBookings, updatePaymentStatus, cancelBooking } from "../controllers/Booking.controller.js";

const router = express.Router();

router.post("/", createBooking); // create booking
router.get("/:email", getUserBookings); // get user bookings
router.put("/:id/payment", updatePaymentStatus); // update payment
router.put("/:id/cancel", cancelBooking); // cancel booking

export default router;

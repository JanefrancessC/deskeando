import { Router } from "express";
import logger from "./utils/logger.js";
import { signup, login } from "./controllers/signup.js";
import auth from "./utils/auth.js";
import { createBooking } from "./controllers/booking.js";
import { viewBookings } from "./controllers/viewBookings.js";
import { updateBooking } from "./controllers/updateBooking.js";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello from Deskeando!" });
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/bookings", auth, createBooking);
router.get("/bookings", auth, viewBookings);
router.put("/bookings/:id", auth, updateBooking)

export default router;

import { Router } from "express";
import logger from "./utils/logger.js";
import auth from "./utils/auth.js";
import { signup, login } from "./controllers/signup.js";
import { createBooking } from "./controllers/booking.js";
import { viewBookings } from "./controllers/viewBookings.js";
import { getDepartments } from "./controllers/getDepartments.js";
import {getDesks } from "./controllers/getDesks.js"
import { cancelBooking } from "./controllers/cancelBooking.js";
import { createDesk } from "./controllers/createDesk.js";
import { deleteDeskByAdmin } from "./controllers/deleteDeskByAdmin.js";
import { bookingsByDate } from "./controllers/bookingsByDate.js";
import { updateBooking } from "./controllers/updateBooking.js";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello from Deskeando!" });
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/bookings", auth, createBooking);
router.post("/desk", auth, createDesk);
router.get("/bookings", auth, viewBookings);
router.get("/departments", getDepartments);
router.get("/desks", getDesks);
router.delete("/bookings/:bookingId", auth, cancelBooking);
router.delete("/desks/:deskName", auth, deleteDeskByAdmin);
router.post("/bookingsByDate", auth, bookingsByDate);
router.put("/bookings/:bookingId", auth, updateBooking)

export default router;

import { Router } from "express";
import logger from "./utils/logger.js";
import { signup, login } from "./controllers/signup.js";
import authenticateToken from "./utils/auth.js"
import { userBookings } from "./controllers/userBookings.js"

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello from Deskeando!" });
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/bookings", authenticateToken, userBookings)

export default router;

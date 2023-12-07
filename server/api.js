import { Router } from "express";
import logger from "./utils/logger.js";
import { signup, login } from "./controllers/auth.js";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello from Deskeando!" });
});

router.post("/signup", signup);
router.post("/login", login);

export default router;

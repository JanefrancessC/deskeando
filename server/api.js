import { Router } from "express";

import logger from "./utils/logger.js";

const router = Router();

router.get("/", (_, res) => {
  logger.debug("Welcoming everyone...");
  res.json({ message: "Hello from Deskeando!" });
});

export default router;

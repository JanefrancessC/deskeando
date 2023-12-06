import { Router } from "express";
import db from "./db.js";
import logger from "./utils/logger.js";
import bcrypt from "bcrypt"

const router = Router();

router.get("/", (_, res) => {
  logger.debug("Welcoming everyone...");
  res.json({ message: "Hello from Deskeando!" });
});


router.post("/signup", async (req, res) => {
  try {
    const { first_name, last_name, role, email, password } = req.body;

    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email])

    if (user.rows.length > 0) {
      res.status(401).json("User already exists")
    }
    const hash = await bcrypt.hash(JSON.stringify(password), 10)

    const newUser = await db.query(`INSERT INTO users (first_name, last_name, role, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [first_name, last_name, role, email, hash])
    res.status(201).json({ message: "User successfully created" })
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message })
  }
})

router.post("/login", async (req, res) => {
  try {
    const {  email, password } = req.body
    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email])

    if (!user) {
      res.status(400).json({ error: "User not found"})
      return
    }

    if (email === user.rows[0].email) {
      res.json(user.rows[0])
    }
  } catch (error) {
    console.error(error.message)
    res.status(400).json({ error: error.message })
  }
})

export default router;

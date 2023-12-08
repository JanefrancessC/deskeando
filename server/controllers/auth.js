import db from "../db.js";
import bcrypt from "bcrypt";
import { jwtToken } from "../utils/jwtToken.js";

export const signup = async (req, res) => {
	try {
		const { first_name, last_name, department, email, password } = req.body;

		const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
			email,
		]);

		if (user.rows.length > 0) {
			res.status(401).json("User already exists");
			return;
		}

		let is_admin = false;
		if (department.toUpperCase() === "HR") {
			is_admin = true;
		}

		const passwordString = String(password);
		const hash = await bcrypt.hash(passwordString, 10);

		const newUser = await db.query(
			`INSERT INTO users (first_name, last_name, department, is_admin, email, passwd)
		  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
			[first_name, last_name, department, is_admin, email, hash]
		);
        const token = jwtToken(newUser.rows[0].user_id)
		res.status(201).json({ token: token });
		// res.status(201).json({ message: "User successfully created" });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: "Server error" });
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
			email,
		]);

		if (user.rows.length === 0) {
			res.status(400).json({ error: "User not found" });
			return;
		}

		const isValidPassword = await bcrypt.compare(
			password,
			user.rows[0].passwd
		);

		if (!isValidPassword) {
			res.status(401).json({ message: "Invalid credentials" });
		}

        const token = jwtToken(user.rows[0].user_id)
		res.status(201).json({ token: token });
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ error: "Server error" });
	}
};

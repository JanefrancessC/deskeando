import db from "../db.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
	try {
		const { first_name, last_name, department, email, password } =
			req.body;

		const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
			email,
		]);

		if (user.rows.length > 0) {
			res.status(401).json("User already exists");
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
		res.status(201).json({ message: "User successfully created" });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: "Server error" });
	}
}

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
			email,
		]);

		if (!user) {
			res.status(400).json({ error: "User not found" });
			return;
		}

		if (email === user.rows[0].email) {
			res.json(user.rows[0]);
		}
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ error: "Server error" });
	}
}
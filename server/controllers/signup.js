import db from "../db.js";
import bcrypt from "bcrypt";
import { jwtToken } from "../utils/jwtToken.js";

export const signup = async (req, res) => {
	try {
		const { firstName, lastName, email, password, department } = req.body;

		const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
			email,
		]);

		if (user.rows.length > 0) {
			res.status(409).json({ error: "User already exists" });
			return;
		}

		let is_admin = false;
		if (department.toUpperCase() === "HR") {
			is_admin = true;
		}

		const passwordString = String(password);
		const hash = await bcrypt.hash(passwordString, 10);

		const newUser = await db.query(
			`INSERT INTO users (first_name, last_name, dept_id, is_admin, email, passwd)
		  VALUES ($1, $2, (SELECT department_id FROM department WHERE name = $3), $4, $5, $6) RETURNING *`,
			[firstName, lastName, department, is_admin, email, hash]
		);
		const token = jwtToken(newUser.rows[0].user_id);
		res
			.status(200)
			.json({ message: "User successfully created", token: token });
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

		const isValidPassword = await bcrypt.compare(password, user.rows[0].passwd);

		if (!isValidPassword) {
			return res.status(401).json({ error: "Invalid credentials" });
		}
		if (user.rows[0].is_admin) {
			return res.json({
				message: { status: "admin", name: user.rows[0].first_name },
			});
		} else {
			res.json({
				message: { status: "employee", name: user.rows[0].first_name },
			});
		}
		const token = jwtToken(user.rows[0].user_id);
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ error: "Server error" });
	}
};

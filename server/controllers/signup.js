import db from "../db.js";
import bcrypt from "bcrypt";
import { jwtToken } from "../utils/jwtToken.js";

export const signup = async (req, res) => {
	try {
		const { firstName, lastName, email, password, department } = req.body;

		const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
			email,
		]);

		// user input validation
		if (!firstName || !lastName || !email || !password || !department) {
			return res.status(400).json({ error: "All fields are required" });
		}
		if (user.rows.length > 0) {
			res.status(409).json({ error: "User already exists" });
			return;
		}

		// set all HR department to admin
		let is_admin = false;
		if (department.toUpperCase() === "HR") {
			is_admin = true;
		}

		// hash user password
		const passwordString = String(password);
		const hash = await bcrypt.hash(passwordString, 10);

		const newUser = await db.query(
			`INSERT INTO users (first_name, last_name, dept_id, is_admin, email, passwd)
		  VALUES ($1, $2, (SELECT department_id FROM department WHERE name = $3), $4, $5, $6) RETURNING *`,
			[firstName, lastName, department, is_admin, email, hash]
		);
		const token = jwtToken(newUser.rows[0].user_id);
		res.status(200).json({
			message: "User successfully created",
			token: token,
		});
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

		// compare saved password with user input
		const isValidPassword = await bcrypt.compare(password, user.rows[0].passwd);
		// get user information if password is valid
		const userInformation = {
			user_id: user.rows[0].user_id,
			email: user.rows[0].email,
			first_name: user.rows[0].first_name,
		};
		// create token for the client
		const token = jwtToken(userInformation);

		if (!isValidPassword) {
			return res.status(401).json({ error: "Invalid credentials" });
		}
		if (user.rows[0].is_admin) {
			return res.json({
				message: {
					status: "admin",
					name: user.rows[0].first_name,
					id: user.rows[0].user_id,
					token: token,
				},
			});
		} else {
			res.json({
				message: {
					status: "employee",
					name: user.rows[0].first_name,
					id: user.rows[0].user_id,
					token: token,
				},
			});
		}
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ error: "Server error" });
	}
};

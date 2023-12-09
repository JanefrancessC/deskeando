import db from "../db.js"
import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
	try {
		const jwtToken = req.header("token");

		if (!jwtToken) {
			return res.status(403).json({ error: "Not Authorized" });
		}

		const payload = jwt.verify(jwtToken, process.env.TOKEN_SECRET);

        const user = await db.query(`SELECT * FROM users WHERE user_id = $1`, [payload.user_id])

        if (!user.rows.length) {
            return res.status(403).json({ error: "User not found" });
        }

		req.user = user.rows[0];

		next();
	} catch (error) {
		console.error(error.message);
		res.status(403).json({ error: "Unauthorized" });

	}
};


export default authenticateToken;
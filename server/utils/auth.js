import jwt from "jsonwebtoken";

// middleware to authenticate a user token
const authenticateToken = (req, res, next) => {
	try {
		const authHeader = req.headers["authorization"];
		const token = authHeader && authHeader.split(" ")[1];

		if (token === null) {
			return res.status(401).json({ error: "Invalid token" });
		}

		jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
			if (error) return res.status(403).json({ error: error.message });
			// set the request to the user input from jwtToken
			req.user = user;
			next();
		});
	} catch (error) {
		console.error(error.message);
		res.status(403).json({ error: "Access denied" });
	}
};

export default authenticateToken;

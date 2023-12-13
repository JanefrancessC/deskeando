import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
	try {
		const authHeader = req.headers["authorization"];
		const token = authHeader && authHeader.split(" ")[1];
		
		if (token === null) {
			return res.status(401).json({ error: "Invalid token" });
		}
		
		jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
			if (error) return res.status(403).json({ error: error.message });
			req.user = user;
			next();
		});
	} catch (error) {
		console.error(error.message);
		res.status(403).json({ error: "Unauthorized" });
	}
};

export default authenticateToken;

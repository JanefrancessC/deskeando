// import jwt from "jsonwebtoken";

// function authenticateToken(req, res, next) {
// 	const authHeader = req.headers["authorization"];
// 	const token = authHeader && authHeader.split(" ")[1];

// 	if (token === null) {
// 		return res.sendStatus(403);
// 	}

// 	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
// 		console.log(err);

// 		if (err) {
// 			return res.sendStatus(403);
// 		}
//         req.user = payload.user;
// 	});

// 	next();
// }

// export default authenticateToken;

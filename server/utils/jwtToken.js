import jwt from "jsonwebtoken";

// generate a web token for user input details
export const jwtToken = ({ user_id, email, first_name }) => {
	const user = { user_id, email, first_name }

	return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};
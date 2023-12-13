import jwt from "jsonwebtoken";

export const jwtToken = ({ user_id, email, first_name }) => {
	const user = { user_id, email, first_name }
    
	return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};

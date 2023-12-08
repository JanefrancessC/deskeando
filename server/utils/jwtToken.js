import jwt from "jsonwebtoken";

export const jwtToken = (user_id) => {
    const payload = {
        user: user_id,
    }

    return jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: "1800s"})
}

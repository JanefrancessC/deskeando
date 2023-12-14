import { Booking } from "../models/Booking";
import { getUser, checkAvailability } from "./dataAccess";
import db from "../db";

export const createBooking = async (req, res) => {
	const errors = [];
	let d1 = new Date();

	const user = await validate({ user: "Chidima", desk: 1, date: d1 }, errors);
	if (errors.length > 0) res.send(errors[0]);
	else {
		const b1 = new Booking(user);
		console.log(errors);
		res.send(b1);
		// b1.save()
	}
};

const validate = async (user, errors) => {
	const id = await getUser(user.user);
	if (!id) {
		errors.push({ error: "User not found" });
	}
	const availability_status = await checkAvailability(user.desk, user.date);
	if (!availability_status) {
		errors.push({ error: "Desk is not available" });
	}
	return { userId: id, deskId: user.desk, createdAt: user.date };
};

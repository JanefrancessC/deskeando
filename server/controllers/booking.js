import { Booking } from "../models/Booking";
import { ErrorMessage } from "../models/Error";
import { validateBooking } from "./validators";

/**
 * Creates a new booking based on the provided request data.
 * @param {Object} req - request object containing booking details.
 * @param {Object} res - response object for sending the result.
 */

export const createBooking = async (req, res) => {
	const errors = [];

	// Check for validation errors
	const user = await validateBooking(req.body, errors);
	if (errors.length > 0) res.status(400).send(errors[0]);
	else {
		// Creates and saves a new bookings instance
		const b1 = new Booking(user);
		const result = await Booking.save(b1);
		if (!result)
			res.status(500).send(new ErrorMessage("Internal Server Error"));
        else
            res.send({ message: "Booking created successfully" });
	}
};

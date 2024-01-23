import {
	getUpdateBookings,
	getUserBookings,
	getDeskId,
	checkAvailability,
} from "./dataAccess";
import { isPast, formatDateTime } from "./validators";

export const updateBooking = async (req, res) => {
	try {
		const user = req.user;
		const { desk, date, time } = req.body;
		const bookingId = parseInt(req.params.bookingId);
		const dateTimeString = `${date}T${time}:00.000Z`;
		const updatedDate = new Date(dateTimeString);

		const userBookings = await getUserBookings(user.user_id);
		const deskId = await getDeskId(desk);

		const bookingExists = userBookings.some(
			(booking) => booking.bookingId === bookingId
		);

		if (!bookingExists) {
			return res.status(404).json({ message: "Bookings not found" });
		}

		if (isPast(updatedDate)) {
			return res
				.status(400)
				.json({ error: "Cannot modify a past date and time" });
		}

		const availability = await checkAvailability(
			deskId,
			formatDateTime(updatedDate)
		);

		if (!availability.status) {
			return res.status(400).json({
				error: "Desk is not available at the specified date and time",
			});
		}

		const updatedBooking = await getUpdateBookings(
			deskId,
			updatedDate,
			new Date(),
			bookingId
		);

		res
			.status(200)
			.json({ message: "Booking updated successfully", data: updatedBooking });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};

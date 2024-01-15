import {
	checkAvailabilityForUpdate,
	getBookingById,
	updateBookingQuery,
	
} from "./dataAccess.js";
import { isPast } from "./validators.js";

export const formatDateTime = (isoDateString) => {
	const date = new Date(isoDateString);
	const formattedDateTime = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false,
		timeZone: "Europe/London",
	}).format(date);

	return formattedDateTime;
};

export const formatTime = (isoDateString) => {
	const date = new Date(isoDateString);
	const options = {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZone: "Europe/London",
	};

	return new Intl.DateTimeFormat("en-GB", options).format(date);
};

export const updateBooking = async (req, res) => {
	try {
		const user = req.user;
		const { desk, date, time } = req.body;
		const bookingId = req.params.id;

		const dateTimeString = `${date}T${time}:00.000Z`;
		const updatedDate = new Date(dateTimeString);

		// Check if the booking with the provided bookingId exists
		const bookingExists = await getBookingById(bookingId);

		if (!bookingExists) {
			return res.status(404).json({ error: "Booking not found" });
		}

		if (isPast(updatedDate)) {
			return res
				.status(400)
				.json({ error: "Cannot modify a past date and time" });
		}

		const existingBooking = await getBookingById(bookingId);

		if (!existingBooking || existingBooking.user_id !== user.user_id) {
			return res.status(403).json({
				error: "Permission denied",
			});
		}

		if (
			existingBooking &&
			existingBooking.reservation_date.getTime() === updatedDate.getTime()
		) {
			return res
				.status(400)
				.json({ error: "The selected date and time are unavailable" });
		}

		const isDeskAvailable = await checkAvailabilityForUpdate(
			desk,
			date,
			time,
			bookingId
		);

		if (!isDeskAvailable.status) {
			return res
				.status(400)
				.json({ error: `${desk} is not available on ${date} at ${time}` });
		}

		const updatedBookingResult = await updateBookingQuery(
			isDeskAvailable.deskId,
			updatedDate,
			new Date(),
			bookingId
		);

		res.status(200).json({
			message: "Booking updated",
			updatedBooking: {
				...updatedBookingResult,
				created_at: formatDateTime(updatedBookingResult.created_at),
				updated_at: formatDateTime(updatedBookingResult.updated_at),
				reservation_date: formatDateTime(updatedBookingResult.reservation_date),
				reservation_time: formatTime(updatedBookingResult.reservation_date),
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server Error" });
	}
};

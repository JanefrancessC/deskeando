import { getUpdateBookings, getUserBookings, getDeskId } from "./dataAccess";
import { formatDate, formatDateTime, formatTime } from "./validators";

export const updateBooking = async (req, res) => {
	try {
		const user = req.user;
		const { desk, date, time } = req.body;
        const bookingId = parseInt(req.params.bookingId);
        console.log(req.body, bookingId);
        const formattedDate = formatDate(date);
        const formattedTime = formatTime(time);
        console.log("dateTime = ",formattedTime, typeof(formattedTime));

		const userBookings = await getUserBookings(user.user_id);
		const deskId = await getDeskId(desk);
        console.log("userBookings:", userBookings);
        const bookingExists = userBookings.some(
					(booking) => booking.bookingId === bookingId
				);
                console.log("Booking Exists", bookingExists);

		if (!bookingExists) {
			return res.status(404).json({ message: "Bookings not found" });
		}
 const formattedDateTime = formatDateTime(new Date(`${date}T${time}`));
 console.log("Formatted Date Time: " + formattedDateTime);
		const updatedBooking = await getUpdateBookings(
			deskId,
			formattedDateTime,
			"NOW()",
			bookingId
		);

		console.log(" updated Booking details: ", updatedBooking);

		res
			.status(200)
			.json({ message: "Booking updated successfully", data: updatedBooking });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};

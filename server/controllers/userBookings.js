import db from "../db.js";

export const userBookings = async (req, res) => {
	try {
		const user = req.user;
		const bookingResult = await db.query(
			`SELECT * FROM bookings WHERE user_id = $1`,
			[user.user_id]
		);
		const bookings = bookingResult.rows;

		const bookingDetails = bookings.map((booking) => ({
			"Booking ID": booking.booking_id,
			"Desk ID": booking.desk_id,
		}));
		res.json(bookingDetails);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

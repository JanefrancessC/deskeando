import db from "../db.js";

export const cancelBooking = async (req, res) => {
	try {
		const user = req.user;
		const bookingIdToDelete = parseInt(req.params.bookingId);

		if (!user) {
			return res.status(401).json({ error: "Unauthorized action" });
		}
		if (typeof bookingIdToDelete !== "number" || isNaN(bookingIdToDelete)) {
			return res.status(403).json({ error: "Not a valid Id" });
		}
		const bookingDetails = await db.query(
			`SELECT * FROM bookings WHERE booking_id = $1 AND user_id = $2`,
			[bookingIdToDelete, user.user_id]
		);

		const booking = bookingDetails.rows[0];

		if (!booking) {
			res.status(404).json({ message: "Booking not found" });
			return;
		}

		const deleteBooking = await db.query(
			`DELETE FROM public.bookings WHERE booking_id = $1`,
			[bookingIdToDelete]
		);
		res.status(200).json({ message: "Bookings deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

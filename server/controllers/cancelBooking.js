import db from "../db.js";

export const cancelBooking = async (req, res) => {
	try {
		const user = req.user;

		const bookingDetails = await db.query(
			`SELECT * FROM bookings WHERE user_id = $1`,
			[user.user_id]
		);
		const bookings = bookingDetails.rows;

        if (!user) {
            return res.status(401).json({ error: "Unauthorized action"});
        }

		if (bookings === 0) {
			res.status(404).json({ message: "Booking not found" });
			return;
		}

        const deleteBooking = await db.query(`DELETE FROM bookings WHERE booking_id = $1`, [bookings.booking_id])
        res.json({bookings: bookings})
        // res.status(200).json({ message: "Booking deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};
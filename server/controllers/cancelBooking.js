import db from "../db.js";

export const cancelBooking = async (req, res) => {
	try {
		const user = req.user;
		const bookingIdToDelete = parseInt(req.params.bookingId);

		if (!user) {
			return res.status(401).json({ error: "Permission denied" });
		}

		if (typeof bookingIdToDelete !== "number" || isNaN(bookingIdToDelete)) {
			console.error(`Invalid Booking ID: ${bookingIdToDelete}`);
			return res.status(400).json({ error: "Not a valid ID" });
		}

		const bookingDetails = await db
			.query(`SELECT * FROM bookings WHERE booking_id = $1 AND user_id = $2`, [
				bookingIdToDelete,
				user.user_id,
			])
			.catch((error) => {
				console.error(error);
				return res.status(500).json({ error: "Database error" });
			});

		const booking = bookingDetails.rows[0];

		if (!booking) {
			res.status(404).json({ message: "Booking not found" });
			return;
		}

		const deleteBooking = await db
			.query(`DELETE FROM public.bookings WHERE booking_id = $1`, [
				bookingIdToDelete,
			])
			.catch((error) => {
				console.error(error);
				return res.status(500).json({ error: `Database Error` });
			});

		if (deleteBooking.rowCount === 0) {
			return res.status(404).json({ message: "Booking not found" });
		}

		res.status(200).json({ message: "Bookings deleted successfully", DeletedBooking: booking });

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
		return;
	}
};

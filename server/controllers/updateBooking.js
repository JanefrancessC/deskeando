import db from "../db.js";
import { viewBookings } from "./viewBookings.js";

// update booking by id
export const updateBooking = async (req, res) => {
	try {
		const user = req.user;
		const { desk, date } = req.body;
		const newDateStamp = Date.now()
		const newDate = new Date(newDateStamp)
		
		// Get user booking details
		const bookID = await db.query(
			`SELECT b.*, u.* FROM bookings b JOIN users u ON b.user_id = u.user_id WHERE u.user_id = $1`,
			[user.user_id]
		);

		if (bookID.rows.length === 0) {
			return res.status(404).json({ error: "No booking found" });
		}

        // check if desk exists
        const validDesk = await db.query(`SELECT desk_id FROM desks WHERE desk_name = $1`, [desk])
        if (validDesk.rows.length === 0) {
            return res.status(404).json({ error: "Not a valid desk" });
        }

		const newBooking = await db.query(
			`UPDATE bookings SET desk_id = $1, reservation_date = $2, updated_at = $3 WHERE booking_id = $4 RETURNING *`,
			[validDesk.rows[0].desk_id, date, newDate, bookID.rows[0].booking_id]
		);
		res.status(200).json({ message: "Booking updated", updatedBooking: newBooking.rows[0] });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};

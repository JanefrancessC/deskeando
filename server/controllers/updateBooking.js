import db from "../db.js";

const formatDateTime = (date) => {
	return date.toLocaleString("en-UK", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZoneName: "short",
	});
};

// update booking by id
export const updateBooking = async (req, res) => {
	try {
		const user = req.user;
		const { desk, date } = req.body;

		const currentDate = new Date();
		const updatedDate = formatDateTime(currentDate);

		// handle past dates
		if (new Date(date) < currentDate) {
			return res.status(400).json({ error: "Cannot update a past date" });
		}
		// Get user booking details
		const bookID = await db.query(
			`SELECT b.*, u.* FROM bookings b JOIN users u ON b.user_id = u.user_id WHERE u.user_id = $1`,
			[user.user_id]
		);

		if (bookID.rows.length === 0) {
			return res.status(404).json({ error: "No booking found" });
		}

		// Check if the selected date is already booked
		const isDateBooked = bookID.rows.some((booking) => {
			return (
				booking.reservation_date.toLocaleDateString("en-UK") ===
				new Date(date).toLocaleDateString("en-UK")
			);
		});

		if (isDateBooked) {
			return res
				.status(400)
				.json({ error: "The selected date is already booked" });
		}

		// check if desk exists
		const validDesk = await db.query(
			`SELECT desk_id FROM desks WHERE desk_name = $1`,
			[desk]
		);

		if (validDesk.rows.length === 0) {
			return res.status(404).json({ error: "Not a valid desk" });
		}

		const newBooking = await db.query(
			`UPDATE bookings SET desk_id = $1, reservation_date = $2, updated_at = $3 WHERE booking_id = $4 AND user_id =$5 RETURNING *`,
			[
				validDesk.rows[0].desk_id,
				date,
				updatedDate,
				bookID.rows[0].booking_id,
				user.user_id,
			]
		);

		res.status(200).json({
			message: "Booking updated",
			updatedBooking: {
				...newBooking.rows[0],
				reservation_date: new Date(newBooking.rows[0].reservation_date),
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};
import db from "../db.js";

// update booking by id
export const updateBooking = async (req, res) => {
    try {
        const user = req.user
        console.log("user details: ", user);
        const bookID = await db.query(`SELECT b.*, u.* FROM bookings b JOIN users u ON b.user_id = u.user_id WHERE u.user_id = $1`, [user.user_id])
        console.log("bookID: ", bookID.rows[0]);
        const bookingId = bookID.rows[0].booking_id;
        // const { id: bookingId } = parseInt(req.params);
        const { deskId, date } = req.body
console.log("booking ID is: ", bookingId);
        const prevBooking = await db.query(`SELECT * FROM bookings WHERE booking_id = $1 AND user_id = $2`, [bookingId, user.user_id])
        
        if (prevBooking.rows.length === 0) {
            return res.status(404).json({ error: "No booking found" })
        }

        const newBooking = await db.query(`UPDATE bookings SET desk_id = $1 WHERE booking_id = $2 RETURNING *`, [bookID.rows[0].desk_id, bookingId])
        console.log(newBooking.rows[0]);
        res.status(200).json({ message: "Booking updated" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message })
    }
}
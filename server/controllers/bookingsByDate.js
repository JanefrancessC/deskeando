import db from "../db.js";

// get bookings by date
export const bookingsByDate = async (req, res) => {
	try {
        const bookingDate = req.body.date;
		const bookingResult = await db.query(
			`SELECT * from public.bookings WHERE reservation_date = $1`,
			[bookingDate]
		);
		res.json(bookingResult.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

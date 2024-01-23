import db from "../db.js";
const day = "day";

// get bookings by date
export const bookingsByDate = async (req, res) => {
	try {
		const { userDate } = req.body;
		const bookingResult = await db.query(
			`SELECT * from public.bookings WHERE date(reservation_date) = $1`,
			[userDate]
		);
		res.json(bookingResult.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

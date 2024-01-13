import db from "../db.js";
import { formatDateTime } from "./updateBooking.js";

// list a logged in user's bookings
export const viewBookings = async (req, res) => {
	try {
		const user = req.user;
		let bookingDetails;

		const bookingResult = await db.query(
			`SELECT b.*, d.*, u.* FROM bookings b 
			JOIN desks d ON b.desk_id = d.desk_id 
			JOIN users u ON b.user_id = u.user_id  
			WHERE u.user_id = $1`,
			[user.user_id]
		);

		const bookings = bookingResult.rows;
		if (bookings.length === 0) {
			res.status(404).json({ message: "No booking found" });
			return;
		}

		// Check if user is admin
		const userAdmin = await db.query(
			`SELECT is_admin FROM users WHERE user_id = $1`,
			[user.user_id]
		);

		const isAdmin = userAdmin.rows[0].is_admin;

		// Admin view
		if (isAdmin) {
			const adminBookingResult = await db.query(`SELECT
				b.booking_id,
				b.user_id,
				b.desk_id,
				b.reservation_date,
				d.*, 
				u.user_id,
				CONCAT(u.first_name, ' ', u.last_name) AS username,
				u.email,
				dp.name AS department
				FROM desks d
				LEFT JOIN bookings b ON b.desk_id = d.desk_id 
				INNER JOIN users u ON b.user_id = u.user_id
				INNER JOIN department dp on dp.department_id = u.dept_id
				`);
			bookingDetails = adminBookingResult.rows;
		}

		// Employee View
		if (!isAdmin) {
			bookingDetails = bookings.map((booking) => ({
				UserId: booking.user_id,
				BookingId: booking.booking_id,
				DeskId: booking.desk_id,
				DeskName: booking.desk_name,
				DeskSize: booking.size,
				DeskType: booking.type,
				ReservedDate: new Date(booking.reservation_date).toLocaleDateString(
					"en-UK",
					{
						year: "numeric",
						month: "short",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZone: "UTC",
					}
				),
			}));
		}

		res.json(bookingDetails);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

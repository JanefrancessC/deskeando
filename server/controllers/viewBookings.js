import db from "../db.js";

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

		// Check if user is admin
		const userAdmin = await db.query(
			`SELECT is_admin FROM users WHERE user_id = $1`,
			[user.user_id]
		);

		const isAdmin = userAdmin.rows[0].is_admin;
		/***
		 SELECT 
    b.*, 
    d.*, 
    u.user_id, 
    CONCAT(u.f_name, ' ', u.l_name) AS user_name,
    u.email AS user_email,
    dp.department_name
FROM desks d
LEFT JOIN bookings b ON d.desk_id = b.desk_id
INNER JOIN users u ON b.user_id = u.user_id
INNER JOIN departments dp ON dp.dept_id = u.dept_id;

		 */

		// Admin view
		if (isAdmin) {
			const adminBookingResult = await db.query(`SELECT
				b.*,
				d.*, 
				u.user_id,
				CONCAT(u.first_name, ' ', u.last_name) AS name,
				FROM bookings b 
				JOIN desks d ON b.desk_id = d.desk_id 
				JOIN users u ON b.user_id = u.user_id`);
			console.log(adminBookingResult.rows);
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

import db from "../db";
import { formatDate, formatTime } from "./validators.js";

/**
 * Retrieves the desk ID associated with a given desk name from the database.
 *
 * @param {string} deskName - The name of the desk for which to retrieve the ID.
 * @returns {string|null} - The desk ID if found, otherwise null.
 */
const getDeskId = async (deskName) => {
	try {
		const result = await db.query(
			"SELECT desk_id FROM public.desks WHERE desk_name = $1",
			[deskName]
		);
		return result.rows[0]?.desk_id || -1;
	} catch (err) {
		console.log(err);
	}
};

/**
 * Checks the availability of a desk on a specific booking date.
 *
 * @param {string} deskName - The name of the desk for which availability is checked.
 * @param {string} bookDate - The date for which availability is checked.
 * @returns {Object} - An object containing the availability status and desk ID.
 *   @property {boolean} status - True if the desk is available, false if booked.
 *   @property {string} deskId - The ID of the desk being checked.
 */
const checkAvailability = async (deskId, bookDate) => {
	try {
		const result = await db.query(
			"SELECT * FROM public.bookings WHERE desk_id = $1 AND reservation_date = $2",
			[deskId, bookDate]
		);
		const rowLen = result.rows.length;
		return { status: rowLen === 0, deskId };
	} catch (err) {
		console.log(err);
	}
};

/**
 * Saves a booking to the database using the provided data.
 *
 * @param {Object} data - Object containing booking details.
 *   @property {string} data.userId - User ID associated with the booking.
 *   @property {string} data.deskId - Desk ID for the reserved desk.
 *   @property {string} data.createdAt - Timestamp indicating the creation date of the booking.
 *   @property {string} data.reservationDate - Timestamp indicating the reservation date.
 *   @property {string} data.updatedAt - Timestamp indicating the last update date.
 * @returns {string|null} - The booking ID if the insertion is successful, otherwise null.
 */

const saveBooking = async (data) => {
	const query =
		"INSERT INTO public.bookings (user_id, desk_id, created_at, reservation_date, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING booking_id";
	const values = [
		data.userId,
		data.deskId,
		data.createdAt,
		data.reservationDate,
		data.updatedAt,
	];
	try {
		const result = await db.query(query, values);
		return result.rows?.[0].booking_id || null;
	} catch (err) {
		console.log(err);
	}
};

// Check if user is admin
export const userAdmin = async (userId) => {
	try {
		const adminResult = await db.query(
			`SELECT is_admin FROM users WHERE user_id = $1`,
			[userId]
		);

		return adminResult.rows[0].is_admin;
	} catch (error) {
		console.error(error);
	}
};

// Get admin bookings
export const getAdminBookings = async () => {
	try {
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

		return adminBookingResult.rows.map((booking) => ({
			...booking,
			reservationDate: formatDate(booking.reservation_date),
			reservationTime: formatTime(booking.reservation_date),
		}));
	} catch (error) {
		console.error(error);
	}
};

// Get user bookings
export const getUserBookings = async (userId) => {
	const userBookingResult = await db.query(
		`SELECT b.*, d.*, u.* FROM bookings b 
			JOIN desks d ON b.desk_id = d.desk_id 
			JOIN users u ON b.user_id = u.user_id  
			WHERE u.user_id = $1`,
		[userId]
	);

	return userBookingResult.rows.map((booking) => ({
		userId: booking.user_id,
		bookingId: booking.booking_id,
		deskId: booking.desk_id,
		deskName: booking.desk_name,
		deskSize: booking.size,
		deskType: booking.type,
		reservationDate: formatDate(booking.reservation_date),
		reservationTime: formatTime(booking.reservation_date),
	}));
};

// desks status
export const getDeskStatus = async () => {
	try {
		const deskStatusResult = await db.query(`
      SELECT d.desk_id, 
             COALESCE(b.reservation_date IS NULL, false) AS is_available
      FROM desks d
      LEFT JOIN bookings b ON d.desk_id = b.desk_id
    `);
		return deskStatusResult.rows;
	} catch (error) {
		console.error({ error: "Unable to retrieve desk status" });
	}
};

export { checkAvailability, saveBooking };

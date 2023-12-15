import db from "../db";
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
		return result.rows[0]?.desk_id || null;
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
const checkAvailability = async (deskName, bookDate) => {
	const deskId = await getDeskId(deskName);
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

export { checkAvailability, saveBooking };

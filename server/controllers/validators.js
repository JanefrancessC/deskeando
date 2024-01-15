import { ErrorMessage } from "../models/Error";
import { checkAvailability } from "./dataAccess";

/**
 * Validates booking details and retrieves additional information for creating a new booking.
 *
 * @param {Object} booking - An object containing booking details.
 *   @property {string} booking.name - The name of the user making the booking.
 *   @property {string} booking.desk - The name of the desk to be booked.
 *   @property {string} booking.date - The booking date in the format "YYYY-MM-DD".
 * @param {Array} errors - An array to store error messages during validation.
 * @returns {Object|null} - An object containing validated booking information if successful, otherwise null.
 */
export const validateBooking = async (booking, errors) => {
	const { userId, desk, date } = booking;

	if (!userId) {
		errors.push(new ErrorMessage("User not found"));
		return
	}

	const formattedDate = new Date(`${date}T12:30:00.000Z`);

	if (isPast(formattedDate)) {
		errors.push(new ErrorMessage("Please enter a valid date"));
		return;
	}

	const availability_status = await checkAvailability(desk, date);

	if (!availability_status.status)
		errors.push(new ErrorMessage(`${desk} is not available on ${date}`));

	return {
		userId,
		deskId: availability_status.deskId,
		createdAt: new Date(),
		reservationDate: formattedDate,
		updatedAt: null,
	};
};

/**
 * Checks if a given date is valid (in the past or out of range).
 *
 * @param {Date} date - The date to be checked.
 * @returns {boolean} - True if the date is valid, false otherwise.
 */
export const isPast = (date) => {
	return isNaN(date) || date < new Date();
};

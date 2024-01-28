import { ErrorMessage } from "../models/Error.js";
import { checkAvailability } from "./dataAccess.js";

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
	const { userId, deskId, date } = booking;

	if (!userId) {
		errors.push(new ErrorMessage("User not found"));
		return;
	}

	const formattedDate = new Date(date);

	if (isPast(formattedDate)) {
		errors.push(new ErrorMessage("Please enter a valid date"));
		return;
	}

	const availability_status = await checkAvailability(deskId, date);

	if (!availability_status.status) {
		const deskName = deskId.toString().padStart(2, 0);
		errors.push(new ErrorMessage(`DK-${deskName} is not available on ${date}`));
	}

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

// format date and time
export const formatDateTime = (isoDateString) => {
	const date = new Date(isoDateString);
	const formattedDateTime = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true,
		timeZone: "Europe/London",
	}).format(date);

	return formattedDateTime;
};

export const formatTime = (isoDateString) => {
	const date = new Date(isoDateString);
	const options = {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZone: "Europe/London",
	};

	return new Intl.DateTimeFormat("en-GB", options).format(date);
};

export const formatDate = (isoDateString) => {
	const date = new Date(isoDateString);
	const formattedDate = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour12: true,
		timeZone: "Europe/London",
	}).format(date);

	return formattedDate;
};

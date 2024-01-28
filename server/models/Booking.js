import { saveBooking } from "../controllers/dataAccess.js";
export class Booking {
    // A Booking Class
	constructor({ userId, deskId, createdAt, reservationDate, updatedAt }) {
		this.userId = userId;
		this.deskId = deskId;
		this.createdAt = createdAt;
		this.reservationDate = reservationDate;
		this.updatedAt = updatedAt;
    }
    // static methods that saves a booking
    static async save(obj) {
        return await saveBooking(obj);
	}
}

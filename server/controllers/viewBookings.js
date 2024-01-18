import { userAdmin, getAdminBookings, getUserBookings } from "./dataAccess.js";

// list a logged in user's bookings
export const viewBookings = async (req, res) => {
	try {
		const user = req.user;
		let bookingDetails;

		// Check if user is admin
		const isAdmin = await userAdmin(user.user_id);

		if (isAdmin) {
			// Admin view
			bookingDetails = await getAdminBookings()
			
		} else {
			// Employee view
			bookingDetails = await getUserBookings(user.user_id)
			
		}

		if (bookingDetails.length === 0) {
			res.status(404).json({ message: "No bookings found" })
		}
		res.json(bookingDetails);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

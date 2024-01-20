import { userAdmin, getAdminBookings, getUserBookings } from "./dataAccess.js";

// list a logged in user's bookings
export const viewBookings = async (req, res) => {
	
<<<<<<< HEAD
=======
		const bookingResult = await db.query(
			`SELECT b.*, d.*, u.* FROM bookings b 
			JOIN desks d ON b.desk_id = d.desk_id 
			JOIN users u ON b.user_id = u.user_id  
			WHERE u.user_id = $1`,
			[user.user_id]
		);

		const bookings = bookingResult.rows;

		if (bookings.length === 0) {
			res.status(404).json({ message: "No booking found" })
			return
		}

>>>>>>> 8728698 (Added Datebar and endpoint.)
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

		res.json(bookingDetails);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

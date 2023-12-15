import db from "../db.js";

// update booking by id
export const updateBooking = async (req, res) => {
    try {
        const user = req.user
        console.log("user details: ", user);
        const bookID = await db.query(`SELECT b.*, u.* FROM bookings b JOIN users u ON b.user_id = u.user_id WHERE u.user_id = $1`, [user.user_id])
        console.log("bookID: ", bookID.rows[0]);
        const bookingId = bookID.rows[0].booking_id;
        // const { id: bookingId } = parseInt(req.params);
        const { deskId, date } = req.body
console.log("booking ID is: ", bookingId);
        const prevBooking = await db.query(`SELECT * FROM bookings WHERE booking_id = $1 AND user_id = $2`, [bookingId, user.user_id])
        
        if (prevBooking.rows.length === 0) {
            return res.status(404).json({ error: "No booking found" })
        }

        const newBooking = await db.query(`UPDATE bookings SET desk_id = $1 WHERE booking_id = $2 RETURNING *`, [bookID.rows[0].desk_id, bookingId])
        console.log(newBooking.rows[0]);
        res.status(200).json({ message: "Booking updated" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message })
    }
}
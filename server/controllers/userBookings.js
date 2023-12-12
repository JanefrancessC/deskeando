import db from "../db.js"

const userBookings = async (req, res) => {
  try {
    const id = req.params.user_id

    const bookings = await db.query(`SELECT * FROM bookings WHERE user_id = $1`, [id])

    res.json(bookings)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Server error" })
  }
}

export default userBookings

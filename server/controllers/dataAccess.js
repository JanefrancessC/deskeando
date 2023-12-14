export const getUser = async (user) => {
	try {
		const result = await db.query(
			"SELECT user_id FROM public.users WHERE first_name = $1",
			[user]
		);
		return result.rows[0] || null;
	} catch (err) {
		console.log(err);
	}
};

export const checkAvailability = async (desk_id, book_date) => {
	try {
		const result = await db.query(
			"SELECT * FROM public.bookings WHERE desk_id = $1 AND created_at = $2",
			[desk_id, book_date]
		);
		return result.rows > 0 ? false : true;
	} catch (err) {
		console.log(err);
	}
};

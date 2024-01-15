import React, { useState, useEffect } from "react";

const BookingDetailsAdmin = ({ bookingId }) => {
	const [booking, setBooking] = useState(null);

	useEffect(() => {
		const fetchBooking = async () => {
			try {
				const response = await fetch(`/api/booking/${bookingId}`);
				const data = await response.json();
				setBooking(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchBooking();
	}, [bookingId]);

	return (
		<div>
			<h1>Booking Details</h1>
			{booking ? (
				<table>
					<thead>
						<tr>
							<th>User ID</th>
							<th>Booking ID</th>
							<th>Desk ID</th>
							<th>Desk Name</th>
							<th>Desk Size</th>
							<th>Desk Type</th>
							<th>Reserved Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{booking.UserId}</td>
							<td>{booking.BookingId}</td>
							<td>{booking.DeskId}</td>
							<td>{booking.DeskName}</td>
							<td>{booking.DeskSize}</td>
							<td>{booking.DeskType}</td>
							<td>{booking.ReservedDate}</td>
						</tr>
					</tbody>
				</table>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};
export default BookingDetailsAdmin;

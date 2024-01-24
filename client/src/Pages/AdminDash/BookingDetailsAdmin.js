import React, { useState, useEffect } from "react";

const BookingDetailsAdmin = () => {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const fetchBooking = async () => {
			const token = JSON.parse(localStorage.getItem("data")).token;
			const options = {
				headers: { Authorization: `Bearer ${token}` },
			};
			try {
				const response = await fetch(`/api/bookings`, options);
				const data = await response.json();
				console.log(data);
				setBookings(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchBooking();
	}, []);

	const handleDelete = async (booking_id) => {
		const token = JSON.parse(localStorage.getItem("data")).token;
		const options = {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await fetch(`/api/bookings/${booking_id}`, options);
			if (response.ok) {
				// Update the state by removing the deleted booking
				setBookings((prevBookings) =>
					prevBookings.filter((booking) => booking.booking_id !== booking_id)
				);
			} else {
				console.error("Failed to delete booking");
			}
		} catch (error) {
			console.error("Error deleting booking:", error);
		}
	};

	return (
		<div className=" d-flex justify-content-center">
			<div
				class="card ms-4 border-0 "
				style={{ height: "700px", overflow: "auto" }}
			>
				<h5
					class="card-header"
					style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
				>
					All Booking Details
				</h5>

				<table
					className="table table-hover"
					style={{ height: "600px", overflow: "auto" }}
				>
					<thead>
						<tr>
							<th scope="col">User Name </th>
							<th scope="col">Reserved Date</th>
							<th scope="col">Desk Name</th>
							<th scope="col">Desk Type</th>
							<th scope="col">Desk Size</th>
							<th scope="col">Department</th>
							<th scope="col">Email</th>
							<th scope="col">Remove</th>
						</tr>
					</thead>
					<tbody>
						{bookings &&
							bookings.map((booking, index) => (
								<tr>
									<td>{booking["username"]}</td>
									<td>{booking["reservation_date"]}</td>
									<td>{booking["desk_name"]}</td>
									<td>{booking["type"]}</td>
									<td>{booking["size"]}</td>
									<td>{booking["department"]}</td>
									<td>{booking["email"]}</td>
									<td>
										<button
											className="btn bi-trash mx-2"
											onClick={() => handleDelete(booking["booking_id"])}
										></button>
										{/* <i class="bi bi-pencil-square mx-2"></i> */}
										{/* <i class="bi bi-trash mx-2"></i> */}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default BookingDetailsAdmin;

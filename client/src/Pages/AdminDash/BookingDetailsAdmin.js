import React, { useState, useEffect } from "react";
import { deleteBooking } from "../../lib/requests";

const BookingDetailsAdmin = ({reload, setReload}) => {
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
	}, [reload]);

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

				<table className="table table-hover">
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
											id={booking.booking_id}
											className="btn bi-trash mx-2"
											onClick={(e) => deleteBooking(e, "/api/bookings", setReload)}
										></button>
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

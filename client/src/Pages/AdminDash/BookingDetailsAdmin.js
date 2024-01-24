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
				setBookings(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchBooking();
	}, []);

	return (
		<div
			className=" d-flex justify-content-center"
			style={{ height: "500px", overflow: "auto" }}
		>
			<div class="card ms-4 h-75 border-0 " style={{ width: "95%" }}>
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
										{/* <i class="bi bi-pencil-square mx-2"></i> */}
										<i class="bi bi-trash mx-2"></i>
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

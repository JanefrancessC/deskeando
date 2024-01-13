import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Image, Spinner } from "react-bootstrap";

function BookingDetailsAdmin() {
	const [userData, setUserData] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	const getData = async () => {
		try {
			const res = await fetch(`/api/users/${id}`);
			if (!res.ok) {
				return;
			}
			let allData = await res.json();
			setLoading(false);
			setUserData(() => allData[0]);
		} catch (err) {
			setLoading(false);
			console.error(`An error occurred: ${err}`);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			{loading && (
				<div className="loading-message">
					<Spinner animation="border" variant="primary" /> <br />
					<span>Loading, please wait...</span>
				</div>
			)}
			{!loading && (
				<div class="card border-0" style={{ width: "75%" }}>
					<h5
						class="card-header"
						style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
					>
						Booking Details
					</h5>
					<div class="card-body">
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Sr No</th>
									<th scope="col">Name</th>
									<th scope="col">Desk ID</th>
									<th scope="col">Date</th>
									<th scope="col">Department</th>
									<th scope="col">Email</th>
									<th scope="col">Edit</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">01</th>
									<td>
										<div>
											<span>{userData.name}</span>
										</div>
									</td>
									<td>{userData.deskId}</td>
									<td>{userData.bookingDate}</td>
									<td>{userData.department}</td>
									<td>{userData.email}</td>

									<td>
										<i class="bi bi-pencil-square mx-2"></i>
										<i class="bi bi-trash mx-2"></i>
									</td>
								</tr>

								<tr>
									<th scope="row">02</th>
									<td>
										<div>
											<span>Samanta William</span>
										</div>
									</td>
									<td>DK-01</td>
									<td>20-01-2024</td>
									<td>IT</td>
									<td>samanta.william@gmail.com</td>

									<td>
										<i class="bi bi-pencil-square mx-2"></i>
										<i class="bi bi-trash mx-2"></i>
									</td>
								</tr>

								<tr>
									<th scope="row">03</th>
									<td>
										<div>
											<span>Samanta William</span>
										</div>
									</td>
									<td>DK-01</td>
									<td>20-01-2024</td>
									<td>IT</td>
									<td>samanta.william@gmail.com</td>

									<td>
										<i class="bi bi-pencil-square mx-2"></i>
										<i class="bi bi-trash mx-2"></i>
									</td>
								</tr>

								<tr>
									<th scope="row">04</th>
									<td>
										<div>
											<span>Samanta William</span>
										</div>
									</td>
									<td>DK-01</td>
									<td>20-01-2024</td>
									<td>IT</td>
									<td>samanta.william@gmail.com</td>

									<td>
										<i class="bi bi-pencil-square mx-2"></i>
										<i class="bi bi-trash mx-2"></i>
									</td>
								</tr>

								<tr>
									<th scope="row">05</th>
									<td>
										<div>
											<span>Samanta William</span>
										</div>
									</td>
									<td>DK-01</td>
									<td>20-01-2024</td>
									<td>IT</td>
									<td>samanta.william@gmail.com</td>

									<td>
										<i class="bi bi-pencil-square mx-2"></i>
										<i class="bi bi-trash mx-2"></i>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
}

export default BookingDetailsAdmin;

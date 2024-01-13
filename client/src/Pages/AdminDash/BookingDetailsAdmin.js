import React from "react";

function BookingDetailsAdmin() {
	return (
		<div class="card border-0" style={{ width: "50%" }}>
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
									<i className="bi bi-calendar me-2"></i>
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
							<th scope="row">02</th>
							<td>
								<div>
									<i className="bi bi-calendar me-2"></i>
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
									<i className="bi bi-calendar me-2"></i>
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
									<i className="bi bi-calendar me-2"></i>
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
									<i className="bi bi-calendar me-2"></i>
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
	);
}

export default BookingDetailsAdmin;

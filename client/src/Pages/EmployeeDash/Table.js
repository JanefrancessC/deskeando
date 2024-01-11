import React from "react";

const Table = () => {
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
							<th scope="col">Serial No</th>
							<th scope="col">Bookings</th>
							<th scope="col">Desk Name</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">01</th>
							<td>
								<div>
									<i className="bi bi-calendar me-2"></i>
									<span>Monday, January 2, 2024</span>
								</div>

								<div>
									<i class="bi bi-alarm me-2"></i>
									<span>9am to 5pm</span>
								</div>
							</td>
							<td>DK-01</td>
							<td>
								<i class="bi bi-pencil-square mx-2"></i>
								<i class="bi bi-trash mx-2"></i>
							</td>
						</tr>
						<tr>
							<th scope="row">01</th>
							<td>
								<div>
									<i className="bi bi-calendar me-2"></i>
									<span>Monday, January 2, 2024</span>
								</div>

								<div>
									<i class="bi bi-alarm me-2"></i>
									<span>9am to 5pm</span>
								</div>
							</td>
							<td>DK-01</td>
							<td>
								<i class="bi bi-pencil-square mx-2"></i>
								<i class="bi bi-trash mx-2"></i>
							</td>
						</tr>
						<tr>
							<th scope="row">01</th>
							<td>
								<div>
									<i className="bi bi-calendar me-2"></i>
									<span>Monday, January 2, 2024</span>
								</div>

								<div>
									<i class="bi bi-alarm me-2"></i>
									<span>9am to 5pm</span>
								</div>
							</td>
							<td>DK-01</td>
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
};

export default Table;

import React from "react";
import "./EmployeeDsh.css"

const BookingDetails = () => {
	return (
		<div class="w-100 d-flex justify-content-around">
			<div class="card" style={{ width: "45%" }}>
				<h5
					class="card-header"
					style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
				>
					Booking Form
				</h5>
				<div class="card-body h-100" style={{ backgroundColor: "#faf9ff" }}>
					<div class="form-group">
						<label class="card-text mt-1" for="exampleInputEmail1">
							Name
						</label>
						<input
							type="text"
							class="form-control card-text my-2"
							id="name"
							placeholder="Enter email"
						/>
					</div>

					<div class="form-group d-flex justify-content-between ">
						<div class="w-75">
							<label class="mt-1" for="exampleInputPassword1">
								Date
							</label>
							<input
								type="password"
								class="form-control my-2 w-100"
								id="exampleInputPassword1"
								placeholder="Monday, January 2, 2024"
							/>
						</div>

						<div>
							<label class="mt-1 ms-4" for="exampleInputPassword1">
								Time
							</label>

							<div class="d-flex justify-content-between" style={{}}>
								<input
									type="password"
									class="form-control my-2 ms-4"
									id="exampleInputPassword1"
									placeholder="from 9:00am"
									style={{ width: "40%" }}
								/>

								<input
									type="password"
									class="form-control my-2"
									id="exampleInputPassword1"
									placeholder="to 5:00pm"
									style={{ width: "40%" }}
								/>
							</div>
						</div>
					</div>

					<div class="form-group d-flex justify-content-between">
						<div style={{ width: "55%" }}>
							<label class="card-text mt-1" for="exampleInputEmail1">
								Desk type
							</label>
							<input
								type="text"
								class="form-control card-text my-2"
								id="name"
								placeholder="Enter email"
							/>
						</div>
						<div>
							<label class="card-text mt-1" for="exampleInputEmail1">
								Desk Number
							</label>
							<input
								type="text"
								class="form-control card-text my-2"
								id="name"
								placeholder="Enter email"
							/>
						</div>
					</div>

					<div class="d-flex justify-content-between w-50">
						<div class="form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="exampleCheck1"
							/>
							<label class="form-check-label" for="exampleCheck1">
								Small
							</label>
						</div>

						<div class="form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="exampleCheck1"
							/>
							<label class="form-check-label" for="exampleCheck1">
								Medium
							</label>
						</div>

						<div class="form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="exampleCheck1"
							/>
							<label class="form-check-label" for="exampleCheck1">
								Large
							</label>
						</div>
					</div>

					<div class="form-group">
						<label class="card-text mt-1" for="exampleInputEmail1">
							Comment
						</label>
						<input
							type="text"
							class="form-control card-text my-2"
							id="name"
							placeholder="Need extra mouse"
						/>
					</div>

					<div class="d-flex w-50 justify-content-between btn-wrap">
						<button type="submit" class="btn rounded-pill" id="f-btn">
							Cancel Booking
						</button>
						<button type="submit" class="btn rounded-pill" id="c-btn">
							Submit
						</button>
					</div>
				</div>
			</div>

			<div class="card" style={{ width: "50%" }}>
				<div class="card-header">Featured</div>
				<div class="card-body">
					<h5 class="card-title">Special title treatment</h5>
					<p class="card-text">
						With supporting text below as a natural lead-in to additional
						content.
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default BookingDetails;

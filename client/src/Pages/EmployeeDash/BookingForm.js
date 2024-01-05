import React from "react";
import "./EmployeeDsh.css";

const BookingForm = () => {
	return (
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
						class="form-control card-text my-2 mb-3"
						id="name"
						placeholder="Enter your name"
					/>
				</div>

				<div class="form-group d-flex justify-content-between ">
					<div class="w-75">
						<label class="mt-1" for="exampleInputPassword1">
							Date
						</label>
						<input
							type="password"
							class="form-control my-2 mb-3 w-100"
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
								class="form-control my-2 mb-3 ms-4"
								id="exampleInputPassword1"
								placeholder="from 9:00am"
								style={{ width: "40%" }}
							/>

							<input
								type="password"
								class="form-control my-2 mb-3"
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
						<select
							class="form-select card-text my-2 mb-3"
							aria-label="Default select example"
						>
							<option selected>Choose a desk type</option>
							<option value="1">Standing Desk</option>
							<option value="2">Regular Desk</option>
						</select>
					</div>
					<div>
						<label class="card-text mt-1" for="exampleInputEmail1">
							Desk Number
						</label>

						<select
							class="form-select card-text my-2 mb-3"
							aria-label="Default select example"
						>
							<option selected>Choose a desk name</option>
							<option value="1">DK-01</option>
							<option value="2">DK-02</option>
						</select>
					</div>
				</div>

				<div class="form-check form-check-inline my-2">
					<input
						class="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="option1"
					/>
					<label class="form-check-label" for="inlineRadio1">
						Small
					</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio2"
						value="option2"
					/>
					<label class="form-check-label" for="inlineRadio2">
						Medium
					</label>
				</div>
				<div class="form-check form-check-inline m">
					<input
						class="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio3"
						value="option3"
					/>
					<label class="form-check-label" for="inlineRadio3">
						Large
					</label>
				</div>

				<div class="form-group">
					<label class="card-text mt-2" for="exampleInputEmail1">
						Comment
					</label>
					<input
						type="text"
						class="form-control card-text my-2 mb-4"
						id="name"
						placeholder="Need extra mouse"
					/>
				</div>

				<div class="btn-wrap d-flex w-50 justify-content-start gap-5">
					<button type="submit" className="btn f-btn">
						Confirm Booking
					</button>
					<button type="submit" className="btn btn-danger btn-lg ">
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookingForm;

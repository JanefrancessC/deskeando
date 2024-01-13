import { React, useState } from "react";
import "../EmployeeDsh.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DayTime from "./DayTime";

const BookingForm = () => {
	const { token, id } = JSON.parse(localStorage.getItem("data"));
	const notifySuccess = () => toast.success("Booking created successfully");
	const [formData, setFormData] = useState([
		{
			userId: id,
			desk: "",
			date: null,
		},
	]);

	const postData = async () => {
		return await fetch("/api/bookings", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ hello: "world" }),
		});
	};

	const handleSubmit = () => {
		postData()
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				notifySuccess();
			});
	};

	return (
		<div class="card ms-4 h-75 border-0" style={{ width: "37%" }}>
			<h5
				class="card-header"
				style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
			>
				Booking Form
			</h5>
			<div
				class="card-body gap-2 h-100 px-4"
				style={{ backgroundColor: "#faf9ff" }}
			>
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
				<DayTime />

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

				<div class="btn-wrap pb-2 d-flex w-75 justify-content-start gap-5">
					<button
						type="submit"
						id="s-btn"
						className="btn rounded"
						onClick={handleSubmit}
					>
						Confirm Booking
					</button>
					<button type="submit" id="c-btn" className="btn rounded">
						Cancel
					</button>

					<ToastContainer position="bottom-center" />
				</div>
			</div>
		</div>
	);
};

export default BookingForm;

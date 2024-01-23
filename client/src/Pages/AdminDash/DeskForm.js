import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DayTime from "../EmployeeDash/Form/DayTime";

const DeskForm = ({ setReload }) => {
	const { token, id } = JSON.parse(localStorage.getItem("data"));
	const [desks, setDesks] = useState([]);
	const [deskDetails, setDeskDetails] = useState({
		deskName: "",
		type: "",
		size: "",
	});
	const [date, setDate] = useState(null);

	const notifySuccess = (message) => toast.success(<div>{message}</div>);
	const notifyError = (message) => toast.error(<div>{message}</div>);

	const formRef = useRef();

	const postData = async () => {
		try {
			const response = await fetch("/api/desk", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(deskDetails), // Use deskDetails instead of formData
			});

			const { message, error } = await response.json();

			if (message) {
				notifySuccess(message);
				setReload(true);
			}

			if (error) {
				notifyError(error);
			}
		} catch (err) {
			console.log(err);
			notifyError();
		} finally {
			formRef.current.reset();
			setDate(null);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit pressed");
		postData();
	};

	useEffect(() => {
		axios
			.get("/api/desks")
			.then((response) => setDesks(response.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="card ms-4 h-75" style={{ width: "37%" }}>
			<h5
				className="card-header"
				style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
			>
				Desk Booking Form
			</h5>
			<form
				ref={formRef}
				className="card-body gap-2 h-100 px-4 needs-validation"
				style={{ backgroundColor: "#faf9ff" }}
				onSubmit={handleSubmit}
			>
				<div className="form-group d-flex justify-content-between">
					<div className="form-group w-50">
						<label className="card-text mt-1" htmlFor="name">
							Desk Name
						</label>
						<input
							type="text"
							className="form-control card-text my-2 mb-4"
							id="name"
							placeholder="Type Desk name - DK-01"
							value={deskDetails.deskName}
							onChange={(e) =>
								setDeskDetails({ ...deskDetails, deskName: e.target.value })
							}
						/>
					</div>
					<div className="form-group" style={{ width: "45%" }}>
						<label className="card-text mt-1" htmlFor="deskType">
							Desk Type
						</label>
						<select
							className="form-control"
							name="deskType"
							value={deskDetails.type}
							onChange={(e) =>
								setDeskDetails({ ...deskDetails, type: e.target.value })
							}
						>
							<option value="">--Please Select--</option>
							<option value="Standing">Standing</option>
							<option value="Regular">Regular</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label className="card-text mt-2" htmlFor="deskSize">
						Desk Size
					</label>
					<select
						className="form-control"
						name="deskSize"
						value={deskDetails.size}
						onChange={(e) =>
							setDeskDetails({ ...deskDetails, size: e.target.value })
						}
					>
						<option value="">--Please Select--</option>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
					</select>
				</div>
				<div className="form-group">
					<label className="card-text mt-2" htmlFor="comment">
						Comment
					</label>
					<input
						type="text"
						className="form-control card-text my-2 mb-4"
						id="comment"
						placeholder="Need extra mouse"
					/>
				</div>
				<div className="btn-wrap pb-2 d-flex w-100 justify-content-start gap-5">
					<button type="submit" id="s-btn" className="btn rounded">
						Add a Desk
					</button>
					<button type="reset" id="c-btn" className="btn rounded">
						Cancel
					</button>
					<ToastContainer position="bottom-center" />
				</div>
			</form>
		</div>
	);
};

export default DeskForm;

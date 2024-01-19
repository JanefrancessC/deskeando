import { React, useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DayTime from "../EmployeeDash/Form/DayTime";

const DeskForm = ({ setReload }) => {
	const { token, id } = JSON.parse(localStorage.getItem("data"));
	const [desks, setDesks] = useState([]);
	const [deskDetails, setDeskDetails] = useState({
		deskName: "",
		deskType: "",
		deskSize: "",
	});
	const deskSize = ["small", "medium", "large"];
	const [date, setDate] = useState(null);

	const notifySuccess = (message) => toast.success(<div>{message}</div>);
	const notifyError = (message) => toast.error(<div>{message}</div>);
	const [formData, setFormData] = useState({
		userId: id,
		deskId: -1,
		date: null,
	});
	const formRef = useRef();

	const postData = async () => {
		return await fetch("/api/desks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(formData),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			postData()
				.then((response) => response.json())
				.then(({ message, error }) => {
					if (message) {
						notifySuccess(message);
						setReload(true);
					}
					error && notifyError(error);
				});
		} catch (err) {
			console.log(err);
			notifyError();
		} finally {
			formRef.current.reset();
			setDate(null);
		}
	};

	const handleFormData = (e) => {
		if (e.getMonth) setFormData({ ...formData, ["date"]: e });
		else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const handleDeskChange = (e) => {
		const selectedDesk = desks.find((el) => {
			const textValue = e.target.options[e.target.selectedIndex].textContent;
			return el.desk_name === textValue;
		});
	};

	useEffect(() => {
		axios
			.get("/api/desks")
			.then((response) => setDesks(response.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div class="card ms-4 h-75" style={{ width: "37%" }}>
			<h5
				class="card-header"
				style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
			>
				Desk Booking Form
			</h5>
			<form
				ref={formRef}
				class="card-body gap-2 h-100 px-4 needs-validation"
				style={{ backgroundColor: "#faf9ff" }}
				onSubmit={handleSubmit}
			>
				<div class="form-group d-flex justify-content-between">
					<div class="form-group w-50">
						<label class="card-text mt-1" for="exampleInputEmail1">
							Desk Name
						</label>

						<select
							required
							class="form-select card-text my-2 mb-3"
							name="deskId"
							aria-label="Default select example"
							onChange={(e) => {
								handleDeskChange(e);
								handleFormData(e);
							}}
						>
							<option selected value="">
								Choose a desk name
							</option>
							{desks.map(({ desk_id, desk_name }, index) => (
								<option value={desk_id} key={index}>
									{desk_name}
								</option>
							))}
						</select>
					</div>
					<div class="form-group" style={{ width: "45%" }}>
						<label class="card-text mt-1" for="exampleInputEmail1">
							Desk type
						</label>
						<select
							class="form-select card-text my-2 mb-3"
							aria-label="Default select example"
						>
							<option defaultChecked value="">
								Choose a desk type
							</option>
							<option selected value={deskDetails.deskType}>
								{deskDetails.deskType}
							</option>
						</select>
					</div>
				</div>

				{deskSize.map((el) => (
					<div class="form-check form-check-inline my-2">
						<input
							class="form-check-input"
							type="radio"
							name="radios"
							id={el}
							value={el}
							checked={deskDetails.deskSize === el}
						/>
						<label class="form-check-label" for="inlineRadio1">
							{el}
						</label>
					</div>
				))}

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

				<div class="btn-wrap pb-2 d-flex w-100 justify-content-start gap-5">
					<button type="submit" id="s-btn" className="btn rounded">
						Add a Desk
					</button>
					<button id="c-btn" type="reset" className="btn rounded">
						Cancel
					</button>

					<ToastContainer position="bottom-center" />
				</div>
			</form>
		</div>
	);
};

export default DeskForm;

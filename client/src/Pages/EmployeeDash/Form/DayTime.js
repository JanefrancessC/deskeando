import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const DayTime = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<>
			<div class="form-group d-flex justify-content-between ">
				<div class="w-75">
					<label class="mt-1" for="exampleInputPassword1">
						Date
					</label>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						className="form-control my-2 mb-3 d-flex justify-content-end gap-2 w-100"
						showTimeInput
            showIcon
						placeholderText="Select a date"
						icon="bi bi-calendar3"
						minDate={new Date()}
					/>
				</div>

				<div>
					<label class="mt-1 ms-4" for="exampleInputPassword1">
						Time
					</label>

					<div class="d-flex justify-content-between">
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
		</>
	);
};

export default DayTime;

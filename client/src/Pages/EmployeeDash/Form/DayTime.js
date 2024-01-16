import { React, useState } from "react";
import DatePicker from "react-datepicker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "react-datepicker/dist/react-datepicker.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

const DayTime = ({onDateChange, date, setDate}) => {
	const [value, onChange] = useState([]);
	return (
		<>
			<div className="form-group d-flex flex-column w-100">
				<label class="mt-1" for="exampleInputPassword1">
					Date
				</label>
				<DatePicker
					selected={date}
					value={date}
					onChange={(date) => {
						setDate(date)
						onDateChange(date)
						
					}}
					dateFormat="dd/MM/yyyy"
					className="form-control my-2 mb-3 d-flex justify-content-end gap-2 w-100"
					showIcon
					placeholderText="Select a date"
					icon="bi bi-calendar3"
					minDate={new Date()}
					required
				/>
			</div>

			<div className="form-group d-flex flex-column w-100">
				<label class="mt-1" for="time">
					Time
				</label>
				<TimeRangePicker
					id="time"
					className="form-control my-2 mb-3 gap-2 w-100"
					onChange={onChange}
					value={value}
					rangeDivider=""
					required
				/>
			</div>
		</>
	);
};

export default DayTime;

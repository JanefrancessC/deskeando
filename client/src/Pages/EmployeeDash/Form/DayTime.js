import {React, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const DayTime = ({ onDateChange, date, setDate }) => {
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
						setDate(date);
						onDateChange(date);
					}}
					dateFormat="dd/MM/yyyy"
					className="form-control my-2 mb-3 d-flex justify-content-end gap-2 w-100"
					showIcon
					placeholderText="Select a date"
					icon="bi bi-calendar3"
					minDate={new Date()}
					required
					showTimeSelect
					minTime={setHours(setMinutes(new Date(), 0), 9)}
					maxTime={setHours(setMinutes(new Date(), 0), 17)}
				/>
			</div>
		</>
	);
};

export default DayTime;

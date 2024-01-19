import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "./DateBar.css";
import "react-datepicker/dist/react-datepicker.css";

const DateBar = ({ handleDateChange }) => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<div className="date-bar-container">
			<form className="date-bar-form">
				<div className=" date-bar-container">
					<label className="form-label date-bar-label mb-0">
						Check Desk Availability
					</label>
					<ReactDatePicker
						dateFormat={"yyyy-MM-dd"}
						minDate={new Date()}
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						placeholderText="Select a weekday"
					/>
					<button
						type="button"
						className="btn btn-primary date-bar-button btn-sm"
						onClick={() => handleDateChange(startDate)}
					>
						Select
					</button>
				</div>
			</form>
		</div>
	);
};

export default DateBar;

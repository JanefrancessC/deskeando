import React from "react";
import BookingForm from "./BookingForm";
import Table from "./Table";
import "./EmployeeDsh.css";

const BookingDetails = () => {
	return (
		<div class="w-100 d-flex justify-content-around">
			<BookingForm />
			<Table />
		</div>
	);
};

export default BookingDetails;

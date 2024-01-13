import React from "react";
import BookingForm from "./BookingForm";
import Table from "./Table";
import "./EmployeeDsh.css";
import BookingDetailsAdmin from "../AdminDash/BookingDetailsAdmin";

const BookingDetails = () => {
	return (
		<div class="w-100 d-flex justify-content-around">
			<BookingForm />
			<Table />
			<BookingDetailsAdmin />
		</div>
	);
};

export default BookingDetails;

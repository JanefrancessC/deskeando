import React from "react";
import BookingForm from "./BookingForm";
import Table from "./Table";
import "./EmployeeDsh.css";

const BookingDetails = ({ isSplitView }) => {
	return (
		<div class="w-100 h-75 d-flex justify-content-around">
			{isSplitView ? (
				<>
					<BookingForm />
					<Table isSplitView={isSplitView} />
				</>
			) : (
				<Table isSplitView={isSplitView} />
			)}
		</div>
	);
};

export default BookingDetails;

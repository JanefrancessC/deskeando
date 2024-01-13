import React from "react";
import BookingForm from "./Form/BookingForm";
import Table from "./Table/Table";
import "./EmployeeDsh.css";
import BookingDetailsAdmin from "../AdminDash/BookingDetailsAdmin";

const BookingDetails = ({ isSplitView }) => {
	return (
		<div class="w-100 d-flex justify-content-around">
<<<<<<< HEAD
			<BookingForm />
			<Table />
			<BookingDetailsAdmin />
=======
			{isSplitView ? (
				<>
					<BookingForm />
					<Table isSplitView={isSplitView} />
				</>
			) : (
				<Table isSplitView={isSplitView} />
			)}
>>>>>>> 7aa1a936b68ad124004219990c3b26a31849eb16
		</div>
	);
};

export default BookingDetails;

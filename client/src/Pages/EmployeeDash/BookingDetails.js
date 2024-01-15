import React from "react";
import BookingForm from "./Form/BookingForm";
import Table from "./Table/Table";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import "./EmployeeDsh.css";

const BookingDetails = ({ view, allBookings }) => {
	return (
		<div class="w-100 d-flex justify-content-around">
			{view.floorPlan ? (
				<div className="w-75">
					<FloorPlan />
				</div>
			) : view.listView.splitView ? (
				<>
					<BookingForm />
					<Table isSplitView={view.listView.splitView} allBookings={allBookings} />
				</>
			) : (
				<Table isSplitView={view.listView.splitView} allBookings={allBookings}/>
			)}
		</div>
	);
};

export default BookingDetails;

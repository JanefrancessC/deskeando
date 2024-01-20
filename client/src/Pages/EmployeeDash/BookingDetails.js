import React from "react";
import BookingForm from "./Form/BookingForm";
import Table from "./Table/Table";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import "./EmployeeDsh.css";

const BookingDetails = ({ view, allBookings, setReload, setView}) => {
	return (
		<div className="d-flex justify-content-around">
			{view.floorPlan ? (
				<div className="floorPlan-wrapper">
					<FloorPlan  setView={setView}/>
				</div>
			) : view.listView.splitView ? (
				<>
					<BookingForm setReload={setReload} />
						<Table isSplitView={view.listView.splitView} allBookings={allBookings} />
				</>
			) : (
				<Table isSplitView={view.listView.splitView} allBookings={allBookings}/>
			)}
		</div>
	);
};

export default BookingDetails;

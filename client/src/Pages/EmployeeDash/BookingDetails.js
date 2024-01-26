import React from "react";
import BookingForm from "./Form/BookingForm";
import Table from "./Table/Table.js";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import "./EmployeeDsh.css";

const BookingDetails = ({ view, allBookings, setReload, setView }) => {
	return (
		<div className="d-flex flex-column gap-2 flex-lg-row justify-content-centre justify-content-md-around align-items-center align-items-lg-start booking-details-container">
			{view.floorPlan ? (
				<div className="floorPlan-wrapper">
					<FloorPlan setView={setView} />
				</div>
			) : view.listView.splitView ? (
				<>
					<BookingForm setReload={setReload} />
					<Table
						isSplitView={view.listView.splitView}
						allBookings={allBookings}
						setReload={setReload}
					/>
				</>
			) : (
				<Table
					isSplitView={view.listView.splitView}
					allBookings={allBookings}
					setReload={setReload}
				/>
			)}
		</div>
	);
};

export default BookingDetails;

import { React, useState, useEffect } from "react";
import BookingForm from "./Form/BookingForm";
import Table from "./Table/Table.js";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import "./EmployeeDsh.css";
import axios from 'axios';

const BookingDetails = ({ view, allBookings, setReload, setView }) => {
	const [desks, setDesks] = useState([]);

	useEffect(() => {
		axios
			.get("/api/desks")
			.then((response) => setDesks(response.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="d-flex flex-column gap-2 flex-lg-row justify-content-centre justify-content-md-around align-items-center align-items-lg-start booking-details-container">
			{view.floorPlan ? (
				<div className="floorPlan-wrapper">
					<FloorPlan setView={setView} />
				</div>
			) : view.listView.splitView ? (
				<>
					<BookingForm setReload={setReload} allDesks={desks} />
					<Table
						isSplitView={view.listView.splitView}
						allBookings={allBookings}
						allDesks={desks}
						setReload={setReload}
					/>
				</>
			) : (
				<Table
					isSplitView={view.listView.splitView}
					allBookings={allBookings}
					allDesks={desks}
					setReload={setReload}
				/>
			)}
		</div>
	);
};

export default BookingDetails;

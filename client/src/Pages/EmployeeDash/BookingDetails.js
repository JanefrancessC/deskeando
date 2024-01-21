import React, {useState} from "react";
import BookingForm from "./Form/BookingForm";
import Table from "./Table/Table";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import "./EmployeeDsh.css";

const BookingDetails = ({ view, allBookings, setReload, setView }) => {
	const [popData, setPopData] = useState(null);
	
	const handlePopulate = (data) => {
		console.log(data);
		setPopData(data)
	};

	return (
		<div className="d-flex justify-content-around">
			{view.floorPlan ? (
				<div className="floorPlan-wrapper">
					<FloorPlan setView={setView} handlePopulate={handlePopulate} />
				</div>
			) : view.listView.splitView ? (
				<>
					<BookingForm setReload={setReload} popData={popData} setPopData={setPopData}/>
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
				/>
			)}
		</div>
	);
};

export default BookingDetails;

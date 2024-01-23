import React from "react";
import DeskForm from "./DeskForm";
import DeskTable from "./DeskTable";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import BookingForm from "../EmployeeDash/Form/BookingForm.js";
import Table from "../EmployeeDash/Table/Table.js";
import BookingDetailsAdmin from "./BookingDetailsAdmin";

const DeskDetailsAdmin = ({ view, allDesks, setReload, setView }) => {
	if (!view.floorPlan  && view.bookings===true)
		return (
			<div class="d-flex justify-content-around">
				{/* <div className="floorPlan-wrapper"> */}
					{/* <FloorPlan setView={setView} /> */}
					<BookingDetailsAdmin />
				{/* </div> */}
			</div>
		);
	else if(!view.floorPlan && view.desks===true) {
		if(view?.listView.splitView) {
			return (
				<div class="d-flex justify-content-around">
				<DeskForm setReload={setReload} />
	 			<DeskTable
	 				isSplitView={view.listView.splitView}
	 				allDesks={allDesks}
	 			/>
	 		</div>
			)
		}
		// return (
		// 	<div class="d-flex justify-content-around">
		// 		{/* <div className="floorPlan-wrapper"> */}
		// 			{/* <FloorPlan setView={setView} /> */}
		// 			< />
		// 		{/* </div> */}
		// 	</div>
		// );
	}
	// return (

	// <div class="d-flex justify-content-around">
	// 	{view.floorPlan ? (
	// 		<div className="floorPlan-wrapper">
	// 			<FloorPlan setView={setView}/>
	// 		</div>
	// 	) : view?.listView.splitView ? (
	// 		<>
	// 			<DeskForm setReload={setReload} />
	// 			<DeskTable
	// 				isSplitView={view.listView.splitView}
	// 				allDesks={allDesks}
	// 			/>
	// 		</>
	// 	) : (
	// 		<BookingDetailsAdmin />
	// 	)}
	// </div>
	// );
};

export default DeskDetailsAdmin;

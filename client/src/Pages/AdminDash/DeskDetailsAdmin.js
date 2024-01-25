import React from "react";
import DeskForm from "./DeskForm";
import DeskTable from "./DeskTable";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import BookingForm from "../EmployeeDash/Form/BookingForm.js";
import Table from "../EmployeeDash/Table/Table.js";
import BookingDetailsAdmin from "./BookingDetailsAdmin";

const DeskDetailsAdmin = ({
	view,
	allDesks,
	setReload,
	setView,
}) => {

	return (
		<div class="d-flex justify-content-around">
			{view.floorPlan ? (
				<div className="floorPlan-wrapper">
					<FloorPlan setView={setView}/>
				</div>
			) : view.listView.splitView ? (
				<>
					<div className="container row ">
						<div className="col-md-6">
							<DeskForm setReload={setReload} />
						</div>
						<div className="col-md-6">
							<DeskTable
								isSplitView={view.listView.splitView}
								allDesks={allDesks}
								setReload={setReload}
							/>
						</div>
					</div>
				</>
			) : (
				<BookingDetailsAdmin />
			)}
		</div>
	);
};

export default DeskDetailsAdmin;

import React from "react";
import DeskForm from "./DeskForm";
import DeskTable from "./DeskTable";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import BookingDetailsAdmin from "./BookingDetailsAdmin";
import "./DeskForm.css"

const DeskDetailsAdmin = ({
	view,
	allDesks,
	setReload,
	setView,
	reload
}) => {

	return (
		<div className="d-flex justify-content-around">
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
						<div className="col-md-6 desk-table">
							<DeskTable
								isSplitView={view.listView.splitView}
								allDesks={allDesks}
								setReload={setReload}
							/>
						</div>
					</div>
				</>
			) : (
						<BookingDetailsAdmin reload={reload } setReload={setReload} />
			)}
		</div>
	);
};

export default DeskDetailsAdmin;

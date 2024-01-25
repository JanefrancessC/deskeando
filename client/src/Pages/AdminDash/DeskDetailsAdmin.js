import React from "react";
import DeskForm from "./DeskForm";
import DeskTable from "./DeskTable";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import BookingDetailsAdmin from "./BookingDetailsAdmin";

const DeskDetailsAdmin = ({ view, allDesks, setReload }) => {
	return (
		<div className="d-flex justify-content-around ">
			{view.floorPlan ? (
				<div className="floorPlan-wrapper">
					<FloorPlan />
				</div>
			) : view?.listView.splitView ? (
				<>
					<DeskForm setReload={setReload} />
					<DeskTable
						isSplitView={view.listView.splitView}
						allDesks={allDesks}
					/>
				</>
			) : (
				<BookingDetailsAdmin />
			)}
		</div>
	);
};

export default DeskDetailsAdmin;

import React from "react";
import DeskForm from "./DeskForm";
import DeskTable from "./DeskTable";
import FloorPlan from "../../Components/FloorPlan/FloorPlan";
import BookingDetailsAdmin from "./BookingDetailsAdmin";
import "./DeskStyles.css";

const DeskDetailsAdmin = ({ view, allDesks, setReload }) => {
	return (
		<div className="d-flex flex-column gap-2 flex-lg-row justify-content-centre justify-content-md-around align-items-center align-items-lg-start">
			{/* "d-flex justify-content-around "> */}
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

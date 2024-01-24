import { React } from "react";
import TableHead from "../TableHead";
import classNames from "classnames";
import NoBookings from "./NoBookings";
import TableBody from "./TableBody";

const Table = ({ isSplitView, allBookings, setReload }) => {
	let cardClass = "card border-0";
	cardClass = isSplitView ? (cardClass += "splitView") : cardClass;

	return (
		<div
			className={classNames("card border-0 booking-details-form", {
				splitView: isSplitView,
				"card-tb": !isSplitView,
			})}
		>
			<h5
				className="card-header"
				style={{ backgroundColor: "#4D44B5", color: "#FCFCFF" }}
			>
				Booking Details
			</h5>
			<div class="card-body" style={{ height: "600px", overflow: "auto" }}>
				<table class="table table-responsive">
					{allBookings.length !== 0 ? (
						<>
							<TableHead isSplitView={isSplitView} />
							<TableBody isSplitView={isSplitView} allBookings={allBookings} setReload={setReload} />
						</>
					) : (
						<NoBookings />
					)}
				</table>
			</div>
		</div>
	);
};

export default Table;

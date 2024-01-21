import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import { switchView } from "../../Pages/EmployeeDash/switchview";
import BookingDetailsAdmin from "./BookingDetailsAdmin";

const Dashboard = () => {
	let token = localStorage.getItem("data");
	const [view, setView] = useState({
		floorPlan: true,
		listView: {
			splitView: false,
		},
	});

	let userDetails = {
		userName: useLocation().state?.key || null,
		role: "Admin",
	};
	const handleClick = (e) => {
		e.preventDefault();
		setView(switchView(e.currentTarget.id));
	};
	return (
		<div className="vh-100">
			{token ? (
				<SideBar
					handleClick={handleClick}
					topBar={
						<Topbar userDetails={userDetails} handleClick={handleClick} />
					}
					bookingDetails={<BookingDetailsAdmin view={view} />}
					userDetails={userDetails}
				/>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default Dashboard;

import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import BookingDetails from "./BookingDetails";
import { switchView } from "./switchview";

const EmployeeDsh = () => {
	let token = localStorage.getItem("data");
	const [view, setView] = useState({
		floorPlan: true,
		listView: {
			splitView: false,
		},
	});

	let userDetails = {
		userName: useLocation().state?.key || null,
		role: "User",
	};
	const handleClick = (e) => {
		e.preventDefault();
		setView(switchView(e.currentTarget.id))	
	};
	return (
		<div className="vh-100">
			{token ? (
				<SideBar
					handleClick={handleClick}
					topBar={
						<Topbar userDetails={userDetails} handleClick={handleClick} />
					}
					bookingDetails={<BookingDetails view={view} />}
				/>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default EmployeeDsh;

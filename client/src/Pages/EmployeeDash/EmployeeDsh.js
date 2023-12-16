import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import BookingDetails from "./BookingDetails";

const EmployeeDsh = () => {
	let userName = useLocation().state?.key || null;
	let role = "User"
	return (
		<div>
			{userName ? (
				<SideBar
					topBar={<Topbar userName={userName} role={role} />}
					bookingDetails={<BookingDetails />}
				/>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default EmployeeDsh;

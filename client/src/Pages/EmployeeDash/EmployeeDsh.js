import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import BookingDetails from "./BookingDetails";

const EmployeeDsh = () => {
	let token = localStorage.getItem("data");
	const [splitView, setSplitView] = useState(false);
	let userDetails = {
		userName: useLocation().state?.key || null,
		role: "User",
	};
	const handleClick = (e) => {
		e.target.id === "book-link" ? setSplitView(true) : setSplitView(false);
	};
	return (
		<div>
			{token ? (
				<SideBar
					topBar={
						<Topbar userDetails={userDetails} handleClick={handleClick} />
					}
					bookingDetails={<BookingDetails isSplitView={splitView} />}
				/>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default EmployeeDsh;

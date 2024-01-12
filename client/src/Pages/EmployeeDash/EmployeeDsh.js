import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import BookingDetails from "./BookingDetails";

const EmployeeDsh = () => {
	let token = localStorage.getItem("data");
	const [splitView, setSplitView] = useState(true);
	let userDetails = {
		userName: useLocation().state?.key || null,
		role: "User",
	};
	const handleClick = (e) => {
		e.preventDefault()
		switch (e.currentTarget.id) {
			case '0':
				setSplitView(false)
				break;
			case '2':
				setSplitView(true)
				break;
		}
		//e.currentTarget.id == 0 ? setSplitView(true) : setSplitView(false)
		//e.target.id === "book-link" ? setSplitView(true) : setSplitView(false);
	};
	return (
		<div className="vh-100">
			{token ? (
				<SideBar handleClick={handleClick}
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

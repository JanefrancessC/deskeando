import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import BookingDetails from "./BookingDetails";
import { switchView } from "./switchview";

const EmployeeDsh = () => {
	const [data, setData] = useState([]);
	let token = localStorage.getItem("data");
	const [view, setView] = useState({
		floorPlan: false,
		listView: {
			splitView: true,
		},
	});

	let userDetails = {
		userName: useLocation().state?.key || null,
		role: "User",
	};

	const handleClick = (e) => {
		e.preventDefault();
		setView(switchView(e.currentTarget.id));
	};

	const fetchData = async (url, options) => {
		return fetch(url, options)
			.then((response) => response.json())
			.then((data) => data);
	};

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("data")).token;
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};

		fetchData("/api/bookings", options).then((data) => {
			setData(data);
		});
	}, []);

	
	return (
		<div className="vh-100">
			{token ? (
				<SideBar
					handleClick={handleClick}
					topBar={
						<Topbar userDetails={userDetails} handleClick={handleClick} />
					}
					bookingDetails={<BookingDetails view={view} allBookings={data} />}
				/>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default EmployeeDsh;

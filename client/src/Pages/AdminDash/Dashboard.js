import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import { switchView } from "../../Pages/EmployeeDash/switchview";
import BookingDetailsAdmin from "./BookingDetailsAdmin";
import DeskDetailsAdmin from "./DeskDetailsAdmin";

const Dashboard = () => {
	let token = localStorage.getItem("data");
	const [data, setData] = useState([]);
	const [reload, setReload] = useState(false);
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
		const id = e.currentTarget.id;
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
		if (data.length === 0 || reload) {
			fetchData("/api/desks", options).then((data) => {
				if (data.message !== "No desks found") setData(data);
			});

			setReload(false);
		}
	}, [reload]);
	return (
		<div className="vh-100">
			{token ? (
				<SideBar
					handleClick={handleClick}
					topBar={
						<Topbar userDetails={userDetails} handleClick={handleClick} />
					}
					bookingDetails={
						<DeskDetailsAdmin
							view={view}
							allBookings={data}
							setReload={setReload}
							setView={setView}
						/>
					}
					userDetails={userDetails}
				/>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default Dashboard;

import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import BookingDetailsAdmin from "./BookingDetailsAdmin";

const Dashboard = () => {
	let userName = useLocation().state?.key;
	return (
		<div>
			{userName ? (
				<h2>{`Hello ${userName} welcome to the admin dashboard`}</h2>
			) : (
				<Forbidden />
			)}
			<BookingDetailsAdmin />
		</div>
	);
};

export default Dashboard;

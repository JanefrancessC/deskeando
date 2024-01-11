import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";

const Dashboard = () => {
	let userName = useLocation().state?.key;
	return (
		<div>
			{userName ? (
				<h2>{`Hello ${userName} welcome to the admin dashboard`}</h2>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default Dashboard;

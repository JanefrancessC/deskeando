import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";

const Dashboard = () => {
	let name = useLocation().state?.key;
	return (
		<div>
			{name ? (
				<h2>{`Hello ${name} welcome to the admin dashboard`}</h2>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default Dashboard;

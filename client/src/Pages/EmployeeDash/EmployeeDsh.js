import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";

const EmployeeDsh = () => {
	let name = useLocation().state?.key || null;
	return (
		<div>
			{name ? (
				<h1>{`Hello ${name} welcome to the employee dashboard`}</h1>
			) : (
				<Forbidden />
			)}
		</div>
	);
};

export default EmployeeDsh;

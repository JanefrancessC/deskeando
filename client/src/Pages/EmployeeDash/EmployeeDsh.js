import React from "react";
import { useLocation } from "react-router-dom";
import Forbidden from "../Error/Forbidden";
import BookingsList from "../BookingsList/BookingsList";

const EmployeeDsh = () => {
	let userName = useLocation().state?.key || null;
	return (
		<div>
			{userName ? (
				<h1>{`Hello ${userName} welcome to the employee dashboard`}</h1>
			) : (
				<>
					<Forbidden />
				</>
			)}
		</div>
	);
};

export default EmployeeDsh;

import React, { useState, useEffect } from "react";
import Map from "./Map.js";
import DateBar from "./DateBar.js";
import { deskData } from "./PlanCoords.js";
let today = new Date().toISOString().slice(0, 10);

const FloorPlan = ({setView}) => {
	const [day, setDay] = useState({ userDate: today });
	const [desks, setDesks] = useState([]);

	const mergeData = (data) => {
		const defaultData = JSON.parse(JSON.stringify(deskData));
		const numbers = data.map((item) => item.desk_id);
		numbers.forEach((number) => (defaultData[number - 1].status = "closed"));
		setDesks(defaultData);
	};

	const fetchData = async (url, options) => {
		return fetch(url, options)
			.then((response) => response.json())
			.then((data) => data);
	};

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("data")).token;
		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"content-type": "application/json",
			},
			body: JSON.stringify(day),
		};
		fetchData("/api/bookingsByDate", options).then((data) => mergeData(data));
	}, [day]);

	const handleDateChange = (date) => {
		let parsedDate= new Date(date).toISOString().slice(0, 10);
		setDay({ userDate: parsedDate });
	};

	return (
		<div>
			<DateBar handleDateChange={handleDateChange} />
			<Map desks={desks} setView={setView} />
		</div>
	);
};

export default FloorPlan;

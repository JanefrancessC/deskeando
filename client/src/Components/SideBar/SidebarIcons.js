import React from "react";
import Home from "./HomeIcon";
import Map from "./FloorplanIcon";
import Bookings from "./BookingsIcon";
import Desk from "./DeskIcon";

const SidebarIcons = ({ handleClick }) => {
	const navItems = [
		{ name: "Home", component: <Home /> },
		{ name: "Floor Plan", component: <Map /> },
		{ name: "Book Desk", icon: "bi-calendar-date" },
		{ name: "Bookings", component: <Bookings /> },
		{ name: "Desk", component: <Desk /> },
		{ name: "Settings", icon: "bi-gear" },
	];

	return (
		<ul
			className="navbar-nav nav-bar-sd d-flex flex-column align-self-center w-100 h-50 gap-4 pt-4"
			style={{ marginTop: "6rem" }}
		>
			{navItems.map((item, index) => (
				<li
					className="nav-item-sd d-flex justify-content-center rounded-start align-self-end py-2"
					key={index}
				>
					<a
						href=""
						id={index}
						onClick={handleClick}
						className="border-0 align-self-center"
					>
						{item.component || <i className={item.icon}></i>}
					</a>

					<span className="label">{item.name}</span>
				</li>
			))}
		</ul>
	);
};

export default SidebarIcons;

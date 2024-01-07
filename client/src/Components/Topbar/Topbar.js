import React, { useState, useEffect, useRef } from "react";
import "./topbar.css";
import iconuser from "./icon-user.svg";
import bell from "./bell.svg";
// import gear from "./gear.svg";

function Topbar(prop) {
	const [startDate, setStartDate] = useState(null);
	const [userName, setUserName] = useState("");
	const [userRole, setUserRole] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);

	const CustomInput = ({ value, onClick }) => (
		<button
			className="form-control dropdown-toggle"
			onClick={onClick}
			id="calendar-link"
		>
			{value || "Calendar"}
		</button>
	);

	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		console.log("Toggle dropdown");
		setShowDropdown(!showDropdown);
	};

	const handleClickOutside = (event) => {
		console.log("Handle click outside");
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setShowDropdown(false);
		}
	};

	const stopPropagation = (event) => {
		console.log("Stop propagation");
		event.stopPropagation();
	};

	return (
		<nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<div className="navbar-nav">
					<button id="book-link" className="nav-link" href="#">
						Book
					</button>
					<button id="bookings-link" className="nav-link" href="#">
						Bookings
					</button>
					<button id="map-link" className="dropdown-toggle nav-link" href="#">
						Map
					</button>
				</div>
			</div>

			<div className="end-of-page">
				<img className="bell" src={bell} alt="The Bell" />
				{/* <img className="gear" src={gear} alt="The Gear" /> */}
				<span className="user-info">
					<strong className="user-name">{prop.userName}</strong> <br />
					<span className="user-role">{prop.role}</span>
				</span>
				<div className="the-icon-user-background" ref={dropdownRef}>
					<div onClick={toggleDropdown}>
						<img className="icon-user" src={iconuser} alt="The Blue Dot" />
					</div>
					{showDropdown && (
						<button
							className="dropdown-menu-buttons"
							onClick={() => console.log("Log Out clicked")}
						>
							Sign out
						</button>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Topbar;

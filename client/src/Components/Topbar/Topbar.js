import React, { useState, useEffect, useRef } from "react";
import "./topbar.css";
import iconuser from "./icon-user.svg";
import bell from "./bell.svg";
import { Link } from "react-router-dom";

function Topbar({ userDetails, handleClick }) {
	const [showDropdown, setShowDropdown] = useState(false)

	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setShowDropdown(false);
		}
	};

	return (
		<nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<div className="navbar-nav">
					<button id="map-link" className="dropdown-toggle nav-link" href="#">
						Map
					</button>
					<button id="book-link" className="nav-link" onClick={handleClick}>
						Book
					</button>
					<button id="bookings-link" className="nav-link" href="#" onClick={handleClick}>
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
					<strong className="user-name">{userDetails.userName}</strong> <br />
					<span className="user-role">{userDetails.role}</span>
				</span>
				<div className="the-icon-user-background" ref={handleClickOutside}>
					<div onClick={toggleDropdown}>
						<img className="icon-user" src={iconuser} alt="The Blue Dot" />
					</div>
					{showDropdown && (
						<Link className="dropdown-button" to="/">
							<button
								className="dropdown-menu-buttons"
								onClick={() => localStorage.clear()}
							>
								Sign out
							</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
}
export default Topbar;

import React, { useState, useEffect, useRef } from "react";
import "./topbar.css";
import iconuser from "./icon-user.svg";
import bell from "./bell.svg";
import { Link } from "react-router-dom";
import searchIcon from "./searchIcon.svg";
// import Home from "../SideBar/HomeIcon";
// import Map from "..SideBar/FloorplanIcon";

function Topbar(prop) {
	const [startDate, setStartDate] = useState(null);
	const [userName, setUserName] = useState("");
	const [userRole, setUserRole] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [navItems, setNavItems] = useState([
		// { name: "Home", component: <Home /> },
		{ name: "Floor Plan", component: <Map /> },
		{ name: "Book Desk", icon: "bi-calendar-date" },
		{ name: "Settings", icon: "bi-gear" },
	]);

	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setShowDropdown(false);
		}
	};

	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	return (
		<nav id="navbar" className="navbar navbar-expand-lg navbar-white bg-white">
			<section className="first_section">
				<form className=" form-inline ">
					<div className="input-control-form form-group has-search">
						<img className="searchIcon" src={searchIcon} alt="The Bell" />
						<input
							type="text"
							className="input-control-form form-control"
							placeholder=" Search here..."
						/>
					</div>
				</form>
			</section>
			<button
				className="navbar-toggler navbar-toggler-topbar "
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<section
				id="navbarSupportedContent"
				className="collapse navbar-collapse end-of-page"
			>
				{/* <div className="bell_user__role"> */}
				<img className="bell" src={bell} alt="The Bell" />

				<span className="user-info">
					<strong className="user-name">{prop.userName}</strong> <br />
					<span className="user-role">{prop.role}</span>
				</span>
				{/* </div> */}
				<div className="the-icon-user-background" ref={dropdownRef}>
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
				<section className="second_logout">
					<ul className="navbar-nav nav-bar-sd flex-column align-items-center mb-sm-auto mt-5 gap-2">
						{navItems.map((item) => {
							return (
								<li
									className="nav-item nav-item-sd rounded-start-pill  d-flex justify-content-center ps-3 pt-1"
									onClick={() => console.log(item.name)}
								>
									<a
										href=""
										className="nav-link border-0 p-0 d-flex align-items-center gap-3"
									>
										{/* <i className={item.icon}></i>{" "} */}
										<span className=" d-sm-inline">{item.name}</span>
									</a>
								</li>
							);
						})}
					</ul>
					<Link className="dropdown-button" to="/">
						<button
							className="dropdown-menu-buttons"
							onClick={() => localStorage.clear()}
						>
							Sign out
						</button>
					</Link>
				</section>
			</section>
		</nav>
	);
}

export default Topbar;

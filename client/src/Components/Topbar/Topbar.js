import React, { useState, useEffect, useRef } from "react";
import "./topbar.css";
import iconuser from "./icon-user.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Topbar({ userDetails, handleClick }) {
	const [showDropdown, setShowDropdown] = useState(false);

	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setShowDropdown(false);
		}
	};

	const navigate = useNavigate();
	return (
		<div className="">
			<nav className="navbar px-2 navbar-expand-lg ">
				<div className="end-of-page d-flex w-100 justify-content-end">
					
					<span className="user-info">
						<strong className="user-name">Chidimma</strong> <br />
						<span className="user-role">{userDetails.role}</span>
					</span>
					<div
						className="the-icon-user-background"
						ref={handleClickOutside}
						
					>
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

				<a className="navbar-brand" />
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto mt-2 mt-lg-0 border border-primary" style={{display: "none"}}>
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Floor Plan
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="#">
								Book
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="#">
								Link
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
export default Topbar;




import React, { useState } from "react";
import "./topbar.css";
import blueDot from "./bluedot.svg";
import bell from "./bell.svg";
import gear from "./gear.svg";

function Topbar() {
	const [startDate, setStartDate] = useState(null);
	const [userName, setUserName] = useState("");
	const [userRole, setUserRole] = useState("");

	const CustomInput = ({ value, onClick }) => (
		<button
			className="form-control dropdown-toggle"
			onClick={onClick}
			id="calendar-link"
		>
			{value || "Calendar"}
		</button>
	);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<div className="navbar-nav">
					{/* <div className="nav-item">
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							customInput={<CustomInput />}
							popperClassName="popper-class"
						/>
					</div> */}
					<button id="map-link" className="dropdown-toggle nav-link" href="#">
						Map
					</button>
					<button id="book-link" className="nav-link" href="#">
						Book
					</button>
					<button id="bookings-link" className="nav-link" href="#">
						Bookings
					</button>
				</div>
			</div>

			<div className="end-of-page">
				<img className="bell" src={bell} alt="The Bell" />
				<img className="gear" src={gear} alt="The Gear" />
				<span className="user-info">
					<strong className="user-name">{userName}</strong> <br />
					<span className="user-role">{userRole}</span>
				</span>
				<img className="blue-dot" src={blueDot} alt="The Blue Dot" />
			</div>
		</nav>
	);
}

export default Topbar;

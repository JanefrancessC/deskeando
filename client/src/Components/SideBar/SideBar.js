import React, { useState, useEffect } from "react";
import "./SideBar.css";
import logo from "../../images/SVG/darkBG-icon-01.svg";
import { useNavigate } from "react-router-dom";
import SidebarIcons from "./SidebarIcons";

const SideBar = ({ topBar, bookingDetails, handleClick, userDetails }) => {
	const navigate = useNavigate();

	// state to set name and icon type for each nav item,this data could be abstracted?

	return (
		<section>
			<div className="container-fluid vh-100">
				<div className="row flex-nowrap w-100">
					<div className="side-col vh-100 text-white p-0 side-bar-display">
						<div className="d-flex flex-column">
							<div className="align-self-center pt-4 px-1 m-0">
								<img
									src={logo}
									className="the-D-logo"
									alt="Logo"
									height="35"
									d
									weight="65"
									onClick={() => navigate("/")}
								/>
							</div>

							<SidebarIcons
								handleClick={handleClick}
								userDetails={userDetails}
							/>
						</div>
					</div>
					<div className="col align-content-center">
						{topBar}
						{bookingDetails}
					</div>
				</div>
			</div>
		</section>
	);
};
export default SideBar;

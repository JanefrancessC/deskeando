import React, { useState, useEffect } from "react";
import "./SideBar.css";
import logo from "../../images/SVG/logo-dark-bg-01.svg";
import { useNavigate } from "react-router-dom";
import SidebarIcons from "./SidebarIcons";

const SideBar = ({ topBar, bookingDetails, handleClick }) => {
	const navigate = useNavigate();

	// state to set name and icon type for each nav item,this data could be abstracted?

	return (
		<section>
			<div className="container-fluid">
				<div className="row flex-nowrap w-100">
					<div className="side-col text-white p-0">
						<div className="d-flex flex-column h-75">
							{/* <div className="align-self-center pt-4 px-1 m-0">
								<img
									src={logo}
									className="logo"
									alt="Logo"
									height="35"d
									weight="65"
									onClick={() => navigate("/")}
								/>
							</div> */}

							<SidebarIcons handleClick={handleClick} />
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

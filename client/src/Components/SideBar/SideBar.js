import React, { useState, useEffect } from "react";
import "./SideBar.css";
import logo from "../../images/SVG/logo-dark-bg-01.svg";

const SideBar = (prop) => {
	// state to set name and icon type for each nav item,this data could be abstracted?
	const [navItems, setNavItems] = useState([
		{ name: "Dashboard", icon: "bi-house" },
		{ name: "User", icon: "bi-person" },
		{ name: "Book", icon: "bi-calendar-date" },
	]);

	return (
		<section>
			<div className="container-fluid">
				<div className="row flex-nowrap ">
					<div className="side-col col-auto col-sm-3 col-md-3 col-xl-2 text-white p-0">
						<div className="d-flex flex-column h-75">
							<div className="align-self-center pt-4 px-1 m-0">
								<img
									src={logo}
									className="logo"
									alt="Logo"
									height="35"
									weight="65"
								/>
							</div>

							<ul className="navbar-nav nav-bar-sd flex-column align-items-center mb-sm-auto mb-0 mt-5 gap-2">
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
												<i className={item.icon}></i>{" "}
												<span className="item-label ms-1 d-none d-sm-inline">
													{item.name}
												</span>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="col align-content-center">
						{prop.topBar}
						{prop.bookingDetails}
					</div>
				</div>
			</div>
		</section>
	);
};
export default SideBar;

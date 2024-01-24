// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";
// import logo from "../../images/SVG/logo-01.svg";

// function Header() {
// 	const navigate = useNavigate()
// 	return (
// 		<div className="">
// 			<nav className="navbar px-2 navbar-expand-lg bg-body-tertiary">
// 				<div className="container-fluid	">
// 					<img src={logo} className="logo" alt="Logo" height="35" weight="65" onClick={() => navigate("/")} />
// 					<button
// 						className="navbar-toggler"
// 						type="button"
// 						data-bs-toggle="collapse"
// 						data-bs-target="#navbarSupportedContent"
// 						aria-controls="navbarSupportedContent"
// 						aria-expanded="false"
// 						aria-label="Toggle navigation"
// 					>
// 						<span className="navbar-toggler-icon"></span>
// 					</button>
// 					<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 						<ul className="navbar-nav me-auto mb-lg-0">
// 							<li className="">
// 								<Link className="nav-item-left" role="button" to="/">
// 									Home
// 								</Link>
// 							</li>
// 							<li className="">
// 								<Link className="nav-item-left" role="button" to="/about">
// 									About Us
// 								</Link>
// 							</li>
// 						</ul>
// 						<form className="btn-link px-4" role="search">
// 							<Link className="btn btn-nav btn-pinks px-4 " role="button" to="/signup">
// 								Signup
// 							</Link>
// 							<Link className="btn btn-nav btn-pinks px-4" role="button" to="/signin">
// 								SignIn
// 							</Link>
// 						</form>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// }

// export default Header;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../images/SVG/logo-01.svg";

function Header() {
	const navigate = useNavigate();
	return (
		<div className="header">
			<nav className="navbar px-2 navbar-expand-lg header-nav fixed-top bg-body-tertiary">
				<div className="container-fluid	">
					<img
						src={logo}
						className="logo"
						alt="Logo"
						height="35"
						weight="65"
						onClick={() => navigate("/")}
					/>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span></span>
						<span></span>
						<span></span>
						{/* <span className="navbar-toggler-icon"></span> */}
					</button>
					<div
						className="collapse navbar-collapse justify-content-between"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-item-left" role="button" to="/">
									Home
								</Link>
							</li>
							<li className="">
								<Link className="nav-item-left" role="button" to="/about">
									About Us
								</Link>
							</li>
						</ul>
						<form className="btn-link px-4" role="search">
							<Link
								className="btn btn-nav btn-pinks px-4 "
								role="button"
								to="/signup"
							>
								Signup
							</Link>
							<Link
								className="btn btn-nav btn-pinks px-4"
								role="button"
								to="/signin"
							>
								SignIn
							</Link>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;


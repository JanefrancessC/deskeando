import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../Pages/images/logo-01.svg";

function Header() {
	return (
		<div className="">
			<nav className="navbar px-2 navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid	">
					<img src={logo} className="logo" alt="Logo" height="30" weight="60" />
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
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" role="button" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link px-4" href="#">
									About Us
								</a>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<Link className="btn btn-pinks px-4" role="button" to="/signup">
								Signup
							</Link>
							<Link className="btn btn-pinks px-4" role="button" to="/signin">
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

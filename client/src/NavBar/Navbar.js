import React, { useState } from "react";
import "./NavBar.css";
import logo from "../Pages/images/logo-01.svg";

function NavBar() {
	return (
		<div className="">
			<nav className="navbar px-2 navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<img src={logo} alt="Logo" />

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
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link px-4" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link px-4" href="#">
									About Us
								</a>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<button className="btn btn-outline-success px-4" type="submit">
								Signin
							</button>
							<button className="btn btn-outline-success px-4" type="submit">
								Signup
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;

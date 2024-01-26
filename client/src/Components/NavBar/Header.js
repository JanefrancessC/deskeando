import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../images/SVG/logo-01.svg";

function Header() {
	const navigate = useNavigate();

	return (
		<div>
			<nav className="navbar navbar-expand-lg fixed-top">
				<div className="container">
					<img
						src={logo}
						className="logo navbar-brand"
						alt="Logo"
						height="35"
						onClick={() => navigate("/")}
					/>
					<button
						className="navbar-toggler shadow-none border-1"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="sidebar offcanvas offcanvas-end"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-header border-bottom">
							<img
								src={logo}
								alt="Logo"
								width={65}
								className="offcanvas-title"
								id="offcanvasNavbarLabel"
							/>
							<button
								type="button"
								className="btn-close shadow-none"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body d-flex flex-column flex-lg-row justify-content-lg-end contain">
							<div className="d-flex flex-column flex-lg-row justify-content-center gap-4">
								<a
									href="/signup"
									className="text-decoration-none btn-signup rounded px-4 py-2 ms-2"
								>
									Signup
								</a>
								<a
									href="/signin"
									className="text-decoration-none btn-signup rounded px-4 py-2 ms-2"
								>
									SignIn
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;

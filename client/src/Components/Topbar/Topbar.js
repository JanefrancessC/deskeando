import { React, useState } from "react";
import "./topbar.css";
import iconuser from "./icon-user.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Topbar({ userDetails, handleClick }) {
	// Hooks
	const [showDropdown, setShowDropdown] = useState(false);
	const navigate = useNavigate();

	const items = ["Home", "Floor Plan", "Book desk"];
	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<div className="">
			<nav className="navbar topbar px-2 navbar-expand-lg w-100 ">
				<div className="end-of-page d-flex w-100 justify-content-end ">
					<span className="user-info">
						<strong className="user-name">{userDetails.userName}</strong> <br />
						<span className="user-role">{userDetails.role}</span>
					</span>
					<div className="the-icon-user-background">
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
					<ul
						class="navbar-nav drop-down mr-auto mt-2 mt-lg-0 d-flex justify-content-center w-100 bg-white rounded"
						style={{ position: "absolute" }}
					>
						{items.map((el, index) => (
							<li className="nav-item active text-center ">
								<a
									className="nav-link drop-down-link"
									data-bs-toggle="collapse"
									data-bs-target=".navbar-collapse.show"
									onClick={handleClick}
									id={index}
								>
									{el}
								</a>
							</li>
						))}

						<li className="nav-item active text-center">
							<a
								className="nav-link drop-down-link"
								data-bs-toggle="collapse"
								data-bs-target=".navbar-collapse.show"
								onClick={() => {
									localStorage.clear();
									navigate("/");
								}}
							>
								Sign out
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
export default Topbar;

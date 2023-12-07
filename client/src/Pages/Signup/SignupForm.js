import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./signupForm.css";
// import { Home } from "../Home.js";

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [SelectDepartment, setRole] = useState("SelectDepartment"); // Default role is "admin"
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		navigate("/");

		// Perform your signup logic here using the state variables
		console.log("Form submitted with role:", SelectDepartment);
	};

	const redirectPath =
		SelectDepartment === "admin" ? "/admin-dashboard" : "/staff-dashboard";

	return (
		<form onSubmit={handleSubmit} className="container mt-5">
			<article className="theFormArticle">
				<h1 className="title">Deskeando</h1>
				<article className="h3AndPtag">
					<h3>Sign Up</h3>
					<p className="forgot-password">
						Already registered? <a href="/Log in">Log in</a>
					</p>
				</article>

				<div className="mb-3 row">
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
				</div>

				<div className="mb-3 row">
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>

				<div className="mb-3 row">
					<div className="col-sm-10">
						<select
							className="form-control"
							value={SelectDepartment}
							onChange={(e) => setRole(e.target.value)}
						>
							<option value="department">Department </option>

							<option value="staff" href="#">
								Staff
							</option>
							<option value="admin" href="#">
								Admin
							</option>
						</select>
					</div>
				</div>

				<div className="mb-3 row">
					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							placeholder="Your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							placeholder="Your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p className="password-condition">
							Must be 8 at least 8 characters{" "}
						</p>
					</div>
				</div>
				<div className="mb-3 row">
					<div className="col-sm-10 offset-sm-2">
						<button type="submit" className="btn  btn-primary btn-block w-100">
							Sign Up
						</button>
					</div>
				</div>
				<section className="sectionBottomText">
					<p className="bottom-text">
						By clicking Continue with or Sign in, you agree to <br />
						Deskeando
						<br />
						<a className="lastText" href="/terms">
							Terms of Service and Privacy Policy
						</a>
					</p>
				</section>
			</article>
		</form>
	);
};

export default SignUp;

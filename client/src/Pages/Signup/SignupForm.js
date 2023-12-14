import React, { useState, useEffect } from "react";
import "./signupForm.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
	const navigate = useNavigate();
	const [isValid, setIsValid] = useState(true);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		department: "",
		email: "",
		password: "",
	});
	const [validationErrors, setValidationErrors] = useState({
		email: "",
		password: "",
	});
	const [signUpError, setSignUpError] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });

		// Validate email on input change
		if (name === "email") {
			setValidationErrors((prevErrors) => ({
				...prevErrors,
				email: validateEmail(value)
					? ""
					: "Please enter a valid email address.",
			}));
		}

		if (name === "password") {
			setValidationErrors((prevErrors) => ({
				...prevErrors,
				password:
					value.trim().length >= 6
						? ""
						: "Password must have at least 6 characters.",
			}));
		}
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const trySignUp = async (url, data = {}) => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		const response = await fetch(url, options);
		if (response.status === 200) {
			resetForm();
			navigate("/signin", { state: { key: "value" } });
		} else {
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!validateEmail(formData.email)) {
			setValidationErrors((prevErrors) => ({
				...prevErrors,
				email: "Please enter a valid email address.",
			}));
			setIsValid(false);
			setSignUpError(true);
			return;
		}

		// Validate password
		if (formData.password.trim().length < 6) {
			setValidationErrors((prevErrors) => ({
				...prevErrors,
				password: "Password must have at least 6 characters.",
			}));
			setIsValid(false);
			setSignUpError(true);
			return;
		}

		// formatted department name to match with master data
		const deptFormatted = formData.department.replace(
			/(^\w{1})|(\s+\w{1})/g,
			(letter) => letter.toUpperCase()
		);

		trySignUp("/api/signup", { ...formData, department: deptFormatted });
		setIsValid(true);
		setSignUpError(false);
	};

	const resetForm = () => {
		setFormData({
			firstName: "",
			lastName: "",
			department: "",
			email: "",
			password: "",
		});
		setValidationErrors({
			email: "",
			password: "",
		});
	};

	useEffect(() => {}, []);

	return (
		<section className="vh-100">
			<div className="container py-5 h-75">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card shadow-2-strong">
							<div className="card-body p-5 text-center">
								<p
									id="title"
									className="text-center h1 sign_up-heading fw-bold p-2"
								>
									Deskeando
								</p>
								<h3 className="form-group d-flex flex-row p-1">Sign Up</h3>
								&nbsp;
								<p id="already-registered">
									Already registered? <Link to="/signin">Sign In</Link>
								</p>
								<form
									onSubmit={handleSubmit}
									className={`w-100 requires-validation ${
										!isValid && "was-validated"
									}`}
									noValidate
								>
									<div className="form-group">
										<label htmlFor="firstName"></label>
										<input
											id="firstName"
											className={`form-control w-100 form-control-lg ${
												!isValid && formData.firstName.trim() === ""
													? "is-invalid"
													: ""
											}`}
											type="text"
											name="firstName"
											placeholder="First Name"
											value={formData.firstName}
											onChange={(e) => handleInputChange(e)}
											maxLength="100"
											required
										/>
										<div className="invalid-feedback text-start">
											Please enter your first name.
										</div>
									</div>

									<div className="form-group">
										<label htmlFor="lastName"></label>
										<input
											id="lastName"
											className={`form-control w-100 form-control-lg ${
												!isValid && formData.lastName.trim() === ""
													? "is-invalid"
													: ""
											}`}
											type="text"
											name="lastName"
											placeholder="Last Name"
											value={formData.lastName}
											onChange={(e) => handleInputChange(e)}
											maxLength="100"
											required
										/>
										<div className="invalid-feedback text-start">
											Please enter your last name.
										</div>
									</div>

									<div className="form-group">
										<label htmlFor="department"></label>
										<select
											id="department"
											className={`form-control w-100 form-control-lg ${
												!isValid && formData.department.trim() === ""
													? "is-invalid"
													: ""
											}`}
											name="department"
											value={formData.department}
											onChange={(e) => handleInputChange(e)}
											required
										>
											<option value="" disabled>
												Department
											</option>
											<option value="it">IT</option>
											<option value="marketing">Marketing</option>
											<option value="finance">Finance</option>
											<option value="sales">Sales</option>
											<option value="hr">HR</option>
											<option value="customer service">Customer Service</option>
											<option value="legal">Legal</option>
											<option value="operations">Operations</option>
										</select>
										<div className="invalid-feedback text-start">
											Please select your department.
										</div>
									</div>

									<div className="form-group">
										<label htmlFor="email"></label>
										<input
											id="email"
											className={`form-control w-100 form-control-lg `}
											type="email"
											name="email"
											placeholder="Your Email"
											value={formData.email.toLowerCase()}
											onChange={(e) => handleInputChange(e)}
											maxLength="500"
											required
										/>
										<div
											id="validationEmail"
											className="invalid-feedback text-start"
										>
											Please enter a valid email address.
										</div>
									</div>

									<div className="form-group">
										<label htmlFor="password"></label>
										<input
											id="password"
											className={`form-control w-100 form-control-lg ${
												!isValid && formData.password.trim() === ""
													? "is-invalid"
													: ""
											}`}
											type="password"
											name="password"
											placeholder="Password"
											value={formData.password}
											onChange={(e) => handleInputChange(e)}
											maxLength="200"
											required
										/>
										<div className="invalid-feedback text-start">
											Please enter your password.
										</div>
									</div>

									<div className="row d-flex justify-content-center p-3">
										<button
											type="submit"
											className="btn sign_in_btn btn-lg w-100"
										>
											Sign Up
										</button>
									</div>

									{signUpError && (
										<h6 className="signup-error">
											SignUp error: Please enter the correct information.
										</h6>
									)}
								</form>
								<div className="text-center">
									<div>
										By clicking Continue with or Sign up, you agree to
										<br />
										<b> Deskeando</b>
										<span className="font-weight-bold d-flex justify-content-center">
											Terms of Service and Privacy Policy
										</span>
										&nbsp; &nbsp;
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignUp;

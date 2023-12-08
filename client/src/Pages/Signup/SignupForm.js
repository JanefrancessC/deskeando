import React, { useState, useEffect } from "react";
import "./signupForm.css";

function SignUp() {
	const [isValid, setIsValid] = useState(true);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		department: "", // Added department state
		email: "",
		password: "",
	});
	const [signUpError, setSignUpError] = useState(false);

	const handleInputChange = (event) => {
		let { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			formData.email.trim() === "" ||
			formData.password.trim() === "" ||
			formData.firstName.trim() === "" ||
			formData.lastName.trim() === "" ||
			formData.department.trim() === ""
		) {
			setIsValid(false);
			setSignUpError(true);
			return;
		}
		// Your other logic for form submission

		// If submission is successful, you can reset the form and error state
		resetForm();
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
	};

	useEffect(() => {
		// Your useEffect logic, e.g., toast("There was an error loading this page.");
	}, []);

	return (
		<section className="vh-100">
			<div className="container py-5 h-75">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card shadow-2-strong">
							<div className="card-body p-5 text-center">
								<p className="text-center h1 sign_up-heading fw-bold p-2">
									Deskeando
								</p>
								<h3 className="form-group d-flex flex-row p-1">Sign in</h3>
								&nbsp;
								<p className="forgot-password">
									Already registered? <a href="/Log in">Log in</a>
								</p>
								<form
									onSubmit={handleSubmit}
									className={`w-100 requires-validation ${
										!isValid && "was-validated"
									}`}
									noValidate
								>
									<div className="form-group">
										<div className="d-flex flex-row py-2">
											<input
												className="form-control w-100 form-control-lg"
												type="text"
												name="firstName"
												placeholder="First Name"
												value={formData.firstName}
												onChange={(e) => handleInputChange(e)}
												maxLength="100"
												required
											/>
										</div>
									</div>
									<div className="form-group">
										<div className="d-flex flex-row py-2">
											<input
												className="form-control w-100 form-control-lg"
												type="text"
												name="lastName"
												placeholder="Last Name"
												value={formData.lastName}
												onChange={(e) => handleInputChange(e)}
												maxLength="100"
												required
											/>
										</div>
									</div>
									<div className="form-group">
										<select
											className="form-control w-100 form-control-lg"
											name="department"
											value={formData.department}
											onChange={(e) => handleInputChange(e)}
											required
										>
											<option value="" disabled>
												Select Department
											</option>
											<option value="sales">HR Team</option>
											<option value="marketing">Front-end Developers</option>
											<option value="it">UI/UX Team</option>
										</select>
									</div>
									<div className="form-group">
										<div className="d-flex flex-row py-2">
											<input
												className="form-control w-100 form-control-lg"
												type="email"
												name="email"
												placeholder="Enter Email"
												value={formData.email.toLowerCase()}
												onChange={(e) => handleInputChange(e)}
												maxLength="500"
												required
											/>
											<div
												id="validationEmail"
												className="invalid-feedback text-start"
											>
												Please enter your email address.
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="d-flex flex-row py-2">
											<input
												className="form-control w-100 form-control-lg"
												type="password"
												name="password"
												placeholder="Enter Password"
												value={formData.password}
												onChange={(e) => handleInputChange(e)}
												maxLength="200"
												required
											/>
											<div
												id="validationPassword"
												className="invalid-feedback text-start"
											>
												Please enter your password.
											</div>
										</div>
									</div>
									<br />
									<div className="row d-flex justify-content-center p-3">
										<button
											type="submit"
											className="btn sign_in_btn btn-lg w-100"
										>
											Sign In
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
										By clicking Continue with or Log in, you agree to
										<br /> Deskeando
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

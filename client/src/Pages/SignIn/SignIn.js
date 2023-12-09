import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const Login = () => {
	const navigate = useNavigate();

	// state for login credentials
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	// state for login errors
	const [loginError, setLoginError] = useState(false);
	const [isValid, setIsValid] = useState(true);

	const { email, password } = formData;

	// function to handle inputted email and password
	const handleFormData = (e) => {
		setLoginError(false);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const tryLogin = async () => {
		const body = { email, password };
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		};
		fetch("/api/login", options)
			.then((response) => response.json())
			.then((response) => {
				let { message } = response;
				if (message && message.status === "admin")
					navigate("/admin", { state: { key: message.name } });
				else if (message && message.status === "employee")
					navigate("/employee", { state: { key: message.name } });
				else {
					setLoginError(true);
					setFormData({ email: "", password: "" });
				}
			})
			.catch((error) => {
				console.error(error);
				throw error;
			});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.email.trim() === "" || formData.password.trim() === "") {
			setIsValid(false);
			return;
		}
		setLoginError(false);
		tryLogin();
	};

	return (
		<section className="vh-100">
			<div className="container py-5 h-75">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card shadow-2-strong ">
							<div className="card-body p-5 text-center">
								<p className="text-center h1 sign_up-heading fw-bold p-2">
									Deskeando
								</p>
								<h3 className="form-group d-flex flex-row p-1">Sign in</h3>
								&nbsp;
								<form
									onSubmit={handleSubmit}
									className={`w-100 requires-validation ${
										!isValid && "was - validated"
									}`}
									novalidate
								>
									<div className="form-group">
										<div className="d-flex flex-row py-2">
											<input
												className="form-control w-100 form-control-lg"
												type="email"
												name="email"
												id="email"
												placeholder="Enter Email"
												value={formData.email.toLowerCase()}
												onChange={(e) => handleFormData(e)}
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
												onChange={(e) => handleFormData(e)}
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
										<div className="text-start">* Forgot password</div>
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

									{loginError && (
										<h6 className="login-error">
											Login error: Please enter the correct email and password.
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
};

export default Login;

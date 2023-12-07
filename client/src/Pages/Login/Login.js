import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const user = "john@john.com";
const pword = "password";

const Login = () => {
	const navigate = useNavigate();

	// state for login credentials
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	// state for login errors
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [loginError, setLoginError] = useState(false);

	const { email, password } = inputs;

	// function to handle inputted email and password
	const handleInputs = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const checkInputs = (checkEmail, checkPassword) => {
		let isEmail = /[a-zA-Z0-9]{3}@[a-zA-Z0-9\.]{4}/g.test(checkEmail);
		let isPassword = checkPassword.length >= 3;
		isEmail === false ? setEmailError(true) : null;
		isPassword === false ? setPasswordError(true) : null;
		return isEmail && isPassword;
	};

	const tryLogin = async () => {
		const options = {
			method: "POST",
			headers: {},
		};
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEmailError(false);
		setPasswordError(false);
		if (checkInputs(email, password)) {
			navigate("/");
		}
	};

	return (
		<div className="container mt-5">
			<div className="row justify-content-center ">
				<h3 className="title-text text-center p-0">Deskeando</h3>
			</div>
			<div className="row justify-content-center">
				<div className="col-7 col-sm-7 col-md-6 col-lg-5 col-xl-4 align-self-center">
					<div className="row">
						<h3 className=" col-2 p-0 sign-in text-center">Sign in</h3>
					</div>
					<form
						onSubmit={handleSubmit}
						className="mt-4 px-2"
					>
						<div className="row">
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={email.toLowerCase()}
								onChange={(e) => handleInputs(e)}
								required
							/>
						</div>
						<div>{emailError && <h6>email error</h6>}</div>
						<div className="row mt-4">
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={password}
								onChange={(e) => handleInputs(e)}
								required
							/>
						</div>
						{passwordError && <h6>password error</h6>}
						<div className=" row pt-2 mt-4">
							<div className="col">
								<button
									type="submit"
									className="btn btn-primary btn-block w-100"
								>
									Login
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

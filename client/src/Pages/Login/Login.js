import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

	const { email, password } = inputs;

	const checkEmail = (email) => {
		return "This is an email.";
	};

	const handleInputs = (e) => {
		if (e.target.name === "email") {
			setInputs({ ...inputs, email: e.target.value });
		} else {
			setInputs({ ...inputs, password: e.target.value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEmailError(false);
		setPasswordError(false);
		if (email === user && password === pword) {
			navigate("/");
		}
	};

	return (
		<div className="container mt-5 p-4 text-center">
			<h3> Deskeando Login</h3>
			<form
				onSubmit={handleSubmit}
				className="form-control-lg"
				// noValidate="novalidate"
			>
				<div className="row p-1">
					<div className="col">
						<label className="email-label">Email:</label>
					</div>
					<div className="col">
						<input
							type="email"
							name="email"
							value={email.toLowerCase()}
							onChange={(e) => handleInputs(e)}
						/>
					</div>
				</div>

				<div className="row p-1">
					<div className="col">
						<label className="password-label">Password:</label>
					</div>
					<div className="col">
						<input
							type="password"
							name="password"
							value={password}
							onChange={(e) => handleInputs(e)}
							required
						/>
					</div>
				</div>
				{emailError && <h6>email error</h6>}
				{passwordError && <h6>password error</h6>}
				<div className=" row pt-2">
					<div className="col">
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;

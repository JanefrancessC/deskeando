import React from "react";
import SignupForm from "./SignupForm.js";
import Header from "../../Components/NavBar/Header.js";
import Footer from "../../Components/Footer/Footer.js";


function SignUp() {
	return (
		<div className="border-2 border-danger">
			<Header />
			<SignupForm />
			<Footer />
		</div>
	);
}

export default SignUp;

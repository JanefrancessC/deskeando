import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Dashboard from "./Pages/AdminDash/Dashboard.js";
import Home from "./Pages/Home.js";
import EmployeeDsh from "./Pages/EmployeeDash/EmployeeDsh.js";
import SignIn from "./Pages/SignIn/SignIn.js";
import Signup from "./Pages/Signup/Signup";
import NotFound from "./Pages/Error/NotFound.js";
import Feature from "./Feature/Feature.js";
import Footer from "./Footer/Footer.js";
import Header from "./NavBar/Header.js";
import Hero from "./Hero/Hero.js";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/signin" element={<SignIn />} />
		<Route path="/signup" element={<Signup />} />
		<Route path="/navbar" element={<NavBar />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin" element={<Dashboard />} />
		<Route path="/employee" element={<EmployeeDsh />} />
		<Route path="/hero" element={<Hero />} />
		<Route path="/navbar" element={<Header />} />
		<Route path="/footer" element={<Feature />} />
		<Route path="/footer" element={<Footer />} />
		<Route path="*" element={<NotFound />} />
	</Routes>
);

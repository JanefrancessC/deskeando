import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Dashboard from "./Pages/AdminDash/Dashboard.js";
import Home from "./Pages/Home.js";
import EmployeeDsh from "./Pages/EmployeeDash/EmployeeDsh.js";
import SignIn from "./Pages/SignIn/SignIn.js";
import Signup from "./Pages/Signup/Signup";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import NotFound from "./Pages/Error/NotFound.js";
=======
import NavBar from "./HomePage/Navbar/NavBar.js";
import Hero from "./Pages/HomePage/Hero.js";
>>>>>>> image and logo added
=======
import NavBar from "./NavBar/NavBar.js";
import Footer from "./Footer/Footer.js";
>>>>>>> navbar, footer added
=======
import NavBar from "./NavBar/Header.js";
import Footer from "./Footer/Footer.js";
import Hero from "./Hero/Hero.js";
import Feature from "./Feature/Feature.js";
>>>>>>> added new features
=======
import NavBar from "./HomePage/Navbar/NavBar.js";
import Hero from "./Pages/HomePage/Hero.js";
>>>>>>> image and logo added
=======
import NavBar from "./NavBar/NavBar.js";
import Footer from "./Footer/Footer.js";
>>>>>>> navbar, footer added

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/signin" element={<SignIn />} />
		<Route path="/signup" element={<Signup />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin" element={<Dashboard />} />
		<Route path="/employee" element={<EmployeeDsh />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		<Route path="*" element={<NotFound />} />
=======
		<Route path="/hero" element={<Hero />} />
>>>>>>> image and logo added
=======
		<Route path="/navbar" element={<NavBar />} />
		<Route path="/navbar" element={<NavBar />} />
		<Route path="/hero" element={<Hero />} />
		<Route path="/hero" element={<Hero />} />
		<Route path="/feature" element={<Feature />} />
		<Route path="/footer" element={<Footer />} />
>>>>>>> navbar, footer added
=======
		<Route path="/hero" element={<Hero />} />
>>>>>>> image and logo added
=======
		<Route path="/navbar" element={<NavBar />} />
		<Route path="/footer" element={<Footer />} />
>>>>>>> navbar, footer added
	</Routes>
);

export default App;

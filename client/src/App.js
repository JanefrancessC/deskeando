import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Dashboard from "./Pages/AdminDash/Dashboard.js";
import Home from "./Pages/Home.js";
import SignIn from "./Pages/SignIn/SignIn.js";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/signin" element={<SignIn />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin" element= {<Dashboard />} />
	</Routes>
);

export default App;

import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Dashboard from "./Pages/AdminDash/Dashboard.js";
import Home from "./Pages/Home.js";
import EmployeeDsh from "./Pages/EmployeeDash/EmployeeDsh.js";
import SignIn from "./Pages/SignIn/SignIn.js";
import Signup from "./Pages/Signup/Signup";
<<<<<<< HEAD
import NotFound from "./Pages/Error/NotFound.js";
=======
import Topbar from "./Pages/TopBar/Topbar";
>>>>>>> cbc557d (topBar-inProgres)

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/signin" element={<SignIn />} />
		<Route path="/signup" element={<Signup />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin" element={<Dashboard />} />
		<Route path="/employee" element={<EmployeeDsh />} />
<<<<<<< HEAD
		<Route path="*" element={<NotFound />} />
=======
		<Route path="/topbar" element={<Topbar />} />
>>>>>>> cbc557d (topBar-inProgres)
	</Routes>
);

export default App;

import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Dashboard from "./Pages/AdminDash/Dashboard.js";
import Home from "./Pages/Home.js";
<<<<<<< HEAD
import Signup from "./Pages/Signup/Signup.js";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/this/site" element={<About />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
=======
import EmployeeDsh from "./Pages/EmployeeDash/EmployeeDsh.js";
import SignIn from "./Pages/SignIn/SignIn.js";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/signin" element={<SignIn />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin" element={<Dashboard />} />
		<Route path="/employee" element={<EmployeeDsh/>} />
	</Routes>
>>>>>>> 9678349c9cc097ed6d7aa1a96d00d91617970d6e
);

export default App;

import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login/Login.js";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/login/here" element={<Login />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;

import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Signup from "./Pages/Signup/Signup.js";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/this/site" element={<About />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default App;

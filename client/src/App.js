import { Route, Routes } from "react-router-dom";

import About from "./Pages/About.js";
import Home from "./Pages/Home.js";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/this/site" element={<About />} />
  </Routes>
);

export default App;

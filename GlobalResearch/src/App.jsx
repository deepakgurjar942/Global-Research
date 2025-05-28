import React from "react";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/header/pages/Home";
import About from "./components/header/pages/About";
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <BrowserRouter>
        <Navbar />
      {/* <MarketResearch/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/learning" element={<h1>Learning</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

//Page Imports
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import "./index.css";

//Other imports
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

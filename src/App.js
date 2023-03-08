import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sampletest" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;

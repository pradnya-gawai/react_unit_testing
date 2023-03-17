import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import AdmissionForm from "./pages/AdmissionForm";
import SummaryForm from "./pages/SummaryForm";

const App = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#fff" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sampletest" element={<Contact />} />
          <Route path="/admissionform" element={<AdmissionForm />} />
          <Route path="/icecreamorder" element={<SummaryForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

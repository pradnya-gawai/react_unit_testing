import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { jokeAction } from "./redux/actions/jokeaction";

import "./App.css";
import BasicExample from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import { jokeAction } from "./redux/actions/jokeaction";

const App = () => {
  const data = useSelector((state) => state?.rootReducer?.todoData);
  const dispatch = useDispatch();
  console.log(data);

  const getResponse = async () => {
    await dispatch(jokeAction());
  };

  useEffect(() => {
    console.log("called");
    // getResponse()
    dispatch(jokeAction());
  }, []);
  // useEffect(() => {
  //   dispatch(jokeAction());
  //   console.log("called")
  // },[]);

  return (
    <div style={{backgroundColor:"#f7f7fa"}}>
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

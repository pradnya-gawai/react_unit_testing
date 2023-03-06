import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jokeAction } from "./redux/actions/jokeaction";

import "./App.css";
import BasicExample from "./components/Header";
// import { jokeAction } from "./redux/actions/jokeaction";

const App = () => {
  const data = useSelector((state) => state?.rootReducer?.todoData);
  const dispatch = useDispatch();
  console.log(data);

  const getResponse=async()=>{
   await dispatch(jokeAction());
  }

  useEffect(() => {
    console.log("called");
    // getResponse()
    dispatch(jokeAction())
   
  }, []);
  // useEffect(() => {
  //   dispatch(jokeAction());
  //   console.log("called")
  // },[]);
  return <BasicExample />;
};

export default App;

import React from "react";
import Header from "../components/Header";

function Contact(props) {
  return (
    <div>
      <Header />
      <div style={{ marginLeft: "18px", marginTop: "55px", display: "flex" }}>
        <div style={{ border: "1px solid transparent", padding: "4px" }}>
          <div>
            <h5 className="me-auto">
              How to perform Unit testing of React Apps using JEST?
            </h5>
            <p>Step 1: Create a new react app</p>
            <>
              For unit testing a react app, let’s create one using the command
              given below:
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

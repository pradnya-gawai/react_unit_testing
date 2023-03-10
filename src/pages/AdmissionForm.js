import React, { useState } from "react";
import "../assets/css/admission.css"

function AdmissionForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ marginLeft: "8px", marginTop: "55px", display: "flex" }}>
      <div style={{ border: "1px solid transparent", padding: "4px" }}>
        <div style={{ textAlign: "center" }}>
          <h5>User form</h5>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <div className="form-group">
            <form onSubmit={handleSubmit}>
              <div >
                <label>
                  First Name:&nbsp;&nbsp;
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>

                <br />
                <label>
                  Last Name:&nbsp;&nbsp;
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Email Add: &nbsp;&nbsp;
               <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone No:&nbsp;&nbsp;
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionForm;

import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";

import { useDispatch, useSelector } from "react-redux";
import { jokeAction } from "../redux/actions/jokeaction";

import Header from "../components/Header";

function Contact(props) {
  const userData = useSelector((state) => state?.todoData);
  const dispatch = useDispatch();
  console.log(userData, "userData");
  const cardColor = [
    "#dff5f3",
    "#f9fac3",
    "#d2f7d0",
    "#fce2e1",
    "#e6e6f5",
    "#f7dcde",
    "#d4fad5",
    "#faf9d4",
    "#f2f3fc",
    "#f9e1fa",
  ];

  useEffect(() => {
    console.log("called");
    // getResponse()
    dispatch(jokeAction());
    console.log(userData, "userData");
  }, []);

  return (
    <div>
      <Header />
      <div style={{ marginLeft: "8px", marginTop: "55px", display: "flex" }}>
        <div style={{ border: "1px solid transparent", padding: "4px" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap:2
            }}
          >
            {userData &&
              userData?.map((data, index) => (
                <>
                  <Card
                    style={{
                      width: "16rem",
                      backgroundColor: cardColor[index],
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  &nbsp;
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

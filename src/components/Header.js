import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../pages/Home";
// import "../assets/header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ position: "fixed", top: 0,  width: "100%"}}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>React Unit Testing</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                // variant="secondary"
                onClick={() => {
                  navigate("/sampletest");
                }}
              >
                Sample Test
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* <Navbar bg="light" expand="lg">
        <Container>
          <div className="col-xs-1 center-block">
            <Navbar.Brand>React Testing Library </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
      <hr/>
      <Nav bg="light" expand="lg">
        <Container>
          <Button
            variant="secondary"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          &nbsp; &nbsp;
          <Button
            variant="secondary"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </Button>
        </Container>
      </Nav> */}
    </>
  );
}

export default Header;

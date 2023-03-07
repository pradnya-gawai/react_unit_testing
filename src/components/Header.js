import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../pages/Home";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" expand="lg">
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
      </Nav>
    </>
  );
}

export default Header;

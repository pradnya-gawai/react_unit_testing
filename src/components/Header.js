import { useNavigate } from "react-router-dom";

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
      <div>
        <button>Home</button>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
      </div>
    </>
  );
}

export default Header;

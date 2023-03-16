import { useNavigate, Navigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../pages/Home";

function Header() {
  const homePageClick = (path) => {
    return <Navigate to={`${path}`} />;
  };

  return (
    <>
      <div style={{ position: "fixed", top: 0, width: "100%" }}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>React Unit Testing</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sampletest"> Sample Test</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/admissionform"> Form Test </Link>
              </Nav.Link>


            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="col-xs-1 center-block">
          <Navbar.Brand href="#home">React Testing Library </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

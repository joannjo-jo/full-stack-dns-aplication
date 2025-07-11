import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MenuNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
         <img
              alt="logo"
              src="https://www.deepnetsoft.com/apple-touch-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <span style={{ color: "blue" }}>DEEP</span> NET <span style={{ color: "gray" }}>SOFT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
            <Nav.Link as={Link} to="/makeitreserve">MAKE A RESERVATION</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;


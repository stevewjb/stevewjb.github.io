import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './assets/logo.png'
import {Cart} from "react-bootstrap-icons";

const Navi = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src= {logo}
            width="120"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="/category">Xbox</NavDropdown.Item>
              <NavDropdown.Item href="/category">PlayStation</NavDropdown.Item>
              <NavDropdown.Item href="/category">Nintendo Switch</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <a class="btn btn-secondary" href="/checkout"><Cart /> Cart</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;

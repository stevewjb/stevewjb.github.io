// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>The Dojo Blog</h1>
//       <div className="links">
//         <a href="/">Home</a>
//         <a href="/create">New Blog</a>
//       </div>
//     </nav>
//   );
// }
 
// export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './assets/logo.png'

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
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="/cateagory">Xbox</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">PlayStation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nintendo Switch</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;

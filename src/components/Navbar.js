import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import '../Navbar.css'
import MovieList from './MovieList';

function MovieNavbar() {
  return (
      <Navbar bg="purple" variant="dark" expand="lg">
          <Container>
              <Navbar.Brand as={NavLink} to="/">Movixers</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto"> {/* Align from left to right */}
                      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                      <Nav.Link as={MovieList} to="/movies">Movies</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item href='https://buy.stripe.com/test_5kAeVzdz2299eukbII'>Donation</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default MovieNavbar;
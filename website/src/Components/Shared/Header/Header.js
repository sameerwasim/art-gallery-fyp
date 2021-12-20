import {Link} from 'react-router-dom'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './Header.scss'

import { app } from '../../../configuration/app.config'

const Header = () => {
  return (
    <Navbar className="header" bg="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="header-navbar-nav" />
        <Navbar.Collapse id="header-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link mx-md-3" to="/artists">Artists</Link>
            <Link className="nav-link" to="/artwork">Artworks</Link>
            <Link className="nav-link" to="/search">Search</Link>

          </Nav>
          <Navbar.Brand className="d-none d-sm-block">
            <Link to="/">
              Art Gallery
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavDropdown title="More" id="moreDropDown">
              <NavDropdown.Item href="/reviews">Reviews</NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link mx-md-3" to="/sign-in">Sign In</Link>
            <Link className="nav-link" to="/">Create an account</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

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
            <Link className="nav-link mx-md-3" to="/">Artists</Link>
            <Link className="nav-link" to="/">Artworks</Link>
          </Nav>
          <Navbar.Brand className="d-none d-sm-block">
            <Link to="/">
              {app.name}
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavDropdown title="More" id="moreDropDown">
              <NavDropdown.Item href="#action3">Reviews</NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link mx-md-3" to="/">Sign In</Link>
            <Link className="nav-link" to="/">Create an account</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

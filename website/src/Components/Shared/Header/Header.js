import {Link} from 'react-router-dom'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './Header.scss'

import { app } from '../../../configuration/app.config'
import { Auth } from '../../../Context/Auth.context'

const Header = () => {

  const auth = Auth()
  const logout = () => {
    auth.activateToken('')
    auth.activateAuthentication(false)
    localStorage.setItem('user', '')
    localStorage.setItem('token', '')
  }

  return (
    <Navbar className="header" bg="dark" variant="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="header-navbar-nav" />
        <Navbar.Collapse id="header-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/search/artists">Search Artists</Link>
            <Link className="nav-link mx-md-3" to="/search/artwork">Search Artworks</Link>
            <NavDropdown title="More" id="moreDropDown">
              <Link className="dropdown-item" to="/reviews">All Reviews</Link>
              <Link className="dropdown-item" to="/about">About</Link>
              <Link className="dropdown-item" to="/contact">Contact</Link>
              <Link className="dropdown-item" to="/faqs">FAQs</Link>
            </NavDropdown>
          </Nav>
          <Navbar.Brand className="d-none d-sm-block">
            <Link to="/">
              Art Gallery
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            {!auth.isAuthenticated ? (
              <>
                <Link className="nav-link mx-md-3" to="/sign-in">Sign In</Link>
                <Link className="nav-link" to="/sign-up">Create an account</Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                <span className="nav-link ms-md-3" onClick={logout} style={{cursor: 'pointer'}}>Sign Out</span>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

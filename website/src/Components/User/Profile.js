import { Container, Form, Button, Row, Col,Image , Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'

import {FaStar, FaUser, FaHome ,FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Profile = () => {
  return (
    <><Navbar className="header" bg="dark" expand="lg">
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
    
      <Container className="px-0" fluid>
        <Row>
          <Col md={3}>
            <div className="pt-5 d-flex flex-column text-center bg-dark h-100">
              <Link className="text-white text-decoration-none" to="/dashboard">
                 <FaHome/>&nbsp;  Dashboard
              </Link>
              <Link className="my-4 text-white text-decoration-none" to="/profile">
                 <FaUser/>&nbsp;  Profile
              </Link>
              <Link className="text-white text-decoration-none" to="/addreview">
                 <FaStar/>&nbsp; Reviews
              </Link>
            </div>
          </Col>
          <Col md={9}>
          <h1 className="my-5">Profile</h1>
        <Form className="py-5 px-3">
          <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className="border-dark p-3 shadow-sm" type="text" placeholder="Enter first name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className="border-dark p-3 shadow-sm" type="text" placeholder="Enter last name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className="border-dark p-3 shadow-sm" type="text" placeholder="Enter phone no" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control className="border-dark p-3 shadow-sm" type="email" placeholder="Enter address" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control className="border-dark p-3 shadow-sm" type="file" size="lg" />
                </Form.Group>
              </Col>
          </Row>


          <Button className="mt-3 px-5 py-3 rounded-pill" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
          </Col>
        </Row>
      </Container>
      <footer>
      <Container fluid className="p-lg-4 p-2">
        <Row>
          <Col lg={4} md={4} >
            <div className="align-self-end">
              <p className="my-5 text-center text-md-start">&copy; Copyrights All rights reserved</p>
            </div>
          </Col>
          
          <Col lg={4} md={4}>
            <div className="text-white d-flex justify-content-center">
              <span className="px-2"><FaInstagram /></span>
              <span className="px-2"><FaLinkedin /></span>
              <span className="px-2"><FaEnvelope /></span>
            </div>
            <hr style={{backgroundColor:'white',height:'2px'}}/>
            <div className="d-flex justify-content-center">
              <Link className="px-2 text-decoration-none text-white" to="/artists">Artist</Link>
              <Link className="px-2 text-decoration-none text-white" to="/artwork">Artworks</Link>
              <Link className="px-2 text-decoration-none text-white" to="/reviews">Reviews</Link>
            </div>
            <div className="d-flex justify-content-center">
              <Link className="px-2 text-decoration-none text-white" to="/contact">
                <small className="text-muted">Contact</small>
              </Link>
              <Link className="px-2 text-decoration-none text-white" to="/about">
                <small className="text-muted">About</small>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className=" my-3  d-flex justify-content-md-end justify-content-center">
              <Image className="px-2" src="https://via.placeholder.com/150" width="100px" height="60px" />
              <Image className="px-2" src="https://via.placeholder.com/150" width="100px" height="60px" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

export default Profile;

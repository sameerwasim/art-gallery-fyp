import {
  Container,
  Modal,
  Form,
  Button,
  Row,
  Col,
  Tab,
  Tabs,
  Image,
  Card,
  FloatingLabel,
   Navbar, Nav, NavDropdown 
} from "react-bootstrap";
import Reviews from "../Home/Reviews";

import React, { useState } from "react";
import { Link } from 'react-router-dom'

import {FaPencilAlt, FaStar, FaUser, FaHome ,FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './profile.scss'

const Addreviews = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
      <Container fluid className="px-0">
       <Row>
         <Col md={3} className="sidebar">
         <div className="pt-5 ps-4 d-flex flex-column justify-content-start bg-dark h-100">
              <Link className=" text-decoration-none" to="/dashboard">
                 <FaHome/>&nbsp;  Dashboard
              </Link>
              <Link className="text-decoration-none" to="/profile">
                 <FaUser/>&nbsp;  Profile
              </Link>
              <Link className=" text-decoration-none" to="/addreview">
                 <FaStar/>&nbsp; Reviews
              </Link>
              <Link className=" text-decoration-none" to="/listing">
                 <FaStar/>&nbsp; Add Listing
              </Link>
            </div>
         </Col>
         <Col md={9}>
         <h1 className="my-5">Reviews</h1>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="User Reviews">
            <Reviews />
          </Tab>
          <Tab eventKey="profile" title="My Reviews">
            <Row className="mt-5">
              {[1, 2, 3, 4].map((item) => (
                <Col lg={4} md={6}>
                  <Card className="border-0 shadow p-4 mt-4">
                    <div className="d-flex justify-content-end mb-3">
                      <Button
                        onClick={handleShow}
                        className="btn btn-dark rounded-pill "
                      >
                        <FaPencilAlt /> &nbsp;Edit
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Edit Reviews</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Edit Reviews"
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: "100px" }}
                            />
                          </FloatingLabel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div>
                          <Image
                            width="60px"
                            height="60px"
                            src="https://via.placeholder.com/150"
                            alt=""
                            className="rounded-circle"
                          />
                        </div>
                        <div className="align-self-center ms-3">
                          <h6 className="">Sameer Waseem</h6>
                          <div className="d-flex text-warning">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span className="ms-0 text-dark ps-2">5.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="">1 Hour ago</div>
                    </div>
                    <div className="mt-2">
                      <p className="mb-0">
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
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

export default Addreviews;

import WebsiteLayout from '../Layouts/Website.layout'

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Tabs,
  Button,
  Modal,
  Tab,
  Card,
  Form,
  FloatingLabel
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaUser, FaStar, FaHome, FaComment, FaPencilAlt } from 'react-icons/fa'

import Sidebar from '../Shared/UserDashboard/Sidebar'
import Reviews from "../Home/Reviews";
import './user.scss'

const AllReviews = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <WebsiteLayout>
      <Container className="mx-0 px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">
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
    </WebsiteLayout>
  );
};

export default AllReviews;

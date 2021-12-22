import WebsiteLayout from '../Layouts/Website.layout'
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Sidebar from '../Shared/UserDashboard/Sidebar'
import './user.scss'


const Profile = () => {
  return (
    <WebsiteLayout>
      <Container fluid className="px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">
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
    </WebsiteLayout>
  );
};

export default Profile;

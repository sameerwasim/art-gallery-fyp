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

const Listing = () => {
  return (
    <WebsiteLayout>
      <Container fluid className="px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">
            <h1 className="my-5">Add Listing</h1>
            <Form className="m-3 ">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  className="p-3 shadow-sm border border-dark"
                  type="text"
                  placeholder="Enter title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Artist</Form.Label>
                <Form.Control
                  className="p-3 shadow-sm border border-dark"
                  type="text"
                  placeholder="Enter artist"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  className="p-3 shadow-sm border border-dark"
                  type="text"
                  placeholder="Enter category"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  className="p-3 shadow-sm border border-dark"
                  type="text"
                  placeholder="Enter size in inches"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="p-3 shadow-sm border border-dark"
                  type="text"
                  placeholder="Enter description"
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
              <Button
                className="rounded-pill px-4 py-2 mt-3"
                variant="dark"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default Listing;

import WebsiteLayout from "../Layouts/Website.layout";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <WebsiteLayout>
        {/*==================================== Contact ============================= */}
        <Container className="p-lg-5 p-0">
          <Row>
            <Col lg={8} md={12}>
              <h1>Contact Us</h1>
              <p>
                Please Ensure you have the painting code in subject for price
                enquiry.
              </p>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        className="border-dark shadow-sm p-3"
                        type="text"
                        placeholder="Enter first name.. "
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        className="border-dark shadow-sm p-3"
                        type="text"
                        placeholder="Enter last name.. "
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        className="border-dark shadow-sm p-3"
                        type="email"
                        placeholder="Enter email.."
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone # </Form.Label>
                      <Form.Control
                        className="border-dark shadow-sm p-3"
                        type="text"
                        placeholder="Enter phone no.. "
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    className="border-dark"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button
                  className="rounded-pill px-4 py-2"
                  variant="dark"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={4} md={12}>
                <Card className="p-4 border-0 shadow">
                    <address className="text-muted">Art Gallery
Address: F-44/1 Block 4, <br/>
 Clifton (E-street), <br/>
Karachi, Pakistan. <br/>
Voice: <br/>
0000-00000 <br/>
example@email.com</address>
                </Card>
            </Col>
          </Row>
        </Container>
      </WebsiteLayout>
    </>
  );
};

export default Contact;

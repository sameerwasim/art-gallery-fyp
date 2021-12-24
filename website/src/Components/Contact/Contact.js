import {useRef} from 'react'
import WebsiteLayout from "../Layouts/Website.layout";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { createContactService } from '../../services/contact/contact'
const Contact = () => {

  const name = useRef()
  const email = useRef()
  const phone = useRef()
  const message = useRef()

  const submit = () => {
    createContactService(
      name.current.value,
      email.current.value,
      phone.current.value,
      message.current.value
    )
  }

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
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        className="border-dark shadow-sm p-3"
                        type="text" ref={name}
                        placeholder="Enter name.. "
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        className="border-dark shadow-sm p-3"
                        type="email" ref={email}
                        placeholder="Enter email.."
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone # </Form.Label>
                      <Form.Control
                        className="border-dark shadow-sm p-3"
                        type="text" ref={phone}
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
                    rows={3} ref={message}
                  />
                </Form.Group>
                <Button
                  className="rounded-pill px-4 py-2"
                  variant="dark"
                  onClick={submit}
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={4} md={12}>
                <Card className="p-4 border-0 shadow">
                    <address className="text-muted">
                    Art Gallery
                    Address: F-44/1 Block 4, <br/>
                    Clifton (E-street), <br/>
                    Lahore, Pakistan. <br/>
                    Voice: <br/>
                    0000-00000 <br/>
                    example@email.com
                    </address>
                </Card>
            </Col>
          </Row>
        </Container>
      </WebsiteLayout>
    </>
  );
};

export default Contact;

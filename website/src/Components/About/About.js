import WebsiteLayout from "../Layouts/Website.layout";
import { Form, Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <WebsiteLayout>
        {/*==================================== Contact ============================= */}
        <Container className="p-md-5 p-2">
            <Row>
                <Col md={6}>
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </Col> 
                <Col>
                    <Image style={{objectFit:'cover'}} width="100%" height="300px" src="https://media.istockphoto.com/photos/artist-paint-brushes-on-the-wooden-palette-picture-id1263478176?b=1&k=20&m=1263478176&s=170667a&w=0&h=Vh1yWlKZx6PDp1OCIsFmwt_GPLgduB8mxYpp4APIkaU=" />
                </Col>
            </Row>
            <Row className="mt-5">
                 
                <Col>
                    <Image style={{objectFit:'cover'}} width="100%" height="300px" src="https://media.istockphoto.com/photos/artist-paint-brushes-on-the-wooden-palette-picture-id1263478176?b=1&k=20&m=1263478176&s=170667a&w=0&h=Vh1yWlKZx6PDp1OCIsFmwt_GPLgduB8mxYpp4APIkaU=" />
                </Col>
                <Col md={6}>
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </Col>
            </Row>
        </Container>
      </WebsiteLayout>
    </>
  );
};

export default Contact;

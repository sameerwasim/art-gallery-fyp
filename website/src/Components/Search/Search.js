import WebsiteLayout from '../Layouts/Website.layout'
import { Container, Card, Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <WebsiteLayout>
        <Container className="Search px-lg-5 px-0">
            <Row className="p-5">
                <Col md={3}>
                    <h5>Search Artwork(s)</h5>
                    
                    <Form className="mt-3">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Title</Form.Label>
                            <Form.Control className="p-3 shadow-sm border border-dark" type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Artist</Form.Label>
                            <Form.Control className="p-3 shadow-sm border border-dark" type="text" placeholder="Enter artist" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Category</Form.Label>
                            <Form.Control className="p-3 shadow-sm border border-dark" type="text" placeholder="Enter category" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className="p-3 shadow-sm border border-dark" type="text" placeholder="Enter description" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
    <Form.Control type="file" />
  </Form.Group>
                        <Button className="rounded-pill px-4 py-2 mt-3" variant="dark" type="submit">
                        <FaSearch /> &nbsp;Search 
                        </Button>
                    </Form>
                </Col>
                <Col md={9} className="">
                    <Row>
                        {[1,2,3,4,5,6].map (item => (
                            <Col lg={4} md={6}>
                                <Card className="mt-3 shadow p-3">
                                    <Image width="100%" height="250px" style={{objectFit:'cover'}} src="https://media.istockphoto.com/photos/painting-poppies-pastel-color-with-texture-in-canvas-picture-id1292937651?b=1&k=20&m=1292937651&s=170667a&w=0&h=qcdrU52hYUze0_2nIv2EIXwOnIfl2HZaXAYjIp8-6rg=" />
                                    <div className="p-3 text-center">
                                        <h6 >Artistwork</h6>
                                        <small className="text-muted">By: Artist Name</small>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </WebsiteLayout>
  )
}

export default Search

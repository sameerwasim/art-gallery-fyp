import WebsiteLayout from '../Layouts/Website.layout'
import { Container, Card, Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaStar } from 'react-icons/fa';

const Artist = () => {
  return (
    <WebsiteLayout>
        <Container className="px-5">
            <Row className="my-5">
                <Col lg={3} md={12}>
                    <Card className="shadow border-0">
                        <Image width="100%" height="300px" style={{objectFit:'cover'}} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="p-3 text-center">
                            <h6>Artist Name</h6>
                            <small className="text-muted">Read Artistname</small><br/>
                            <small className="text-muted">Biography</small>
                        </div>
                    </Card>
                    
                        <Card className="border-0 shadow p-4 my-4 ">
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="d-flex flex-wrap">
                                    <div>
                                        <Image width="60px" height="60px" src="https://via.placeholder.com/150" alt="" className="rounded-circle" />
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
                                <div className="">
                                    1 Hour ago
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="mb-0">
                                   he 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </Card>
                    
                </Col>
                <Col lg={9} md={12}>
                    <h4>Art Works</h4>
                    <Row>
                        {[1,2,3,4].map (item => (
                        <Col md={6} className="mb-4">
                            <Card>
                                <Image width="100%" height="400px" style={{objectFit:'cover'}}  src="https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
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

export default Artist

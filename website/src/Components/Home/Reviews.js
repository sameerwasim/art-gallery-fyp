import WebsiteLayout from '../Layouts/Website.layout'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa';
const Reviews = () => {
  return (
      
    <>
    {/*==================================== Reviews ============================= */}
        
        <Container className="mb-5 artwork">
            
            <Row className="mt-5">
                {[1,2,3,4,5,6].map (item => (
                    <Col lg={4} md={6}>
                        <Card className="border-0 shadow p-4 mt-4">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <div>
                                        <Image style={{objectFit:'cover'}} width="60px" height="60px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-circle" />
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
                                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default Reviews

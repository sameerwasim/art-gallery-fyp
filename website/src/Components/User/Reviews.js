import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect, useRef } from "react";
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
import { UserProfileService } from '../../services/authentication/authentication'
import { Link } from "react-router-dom";
import { FaUser, FaStar, FaHome, FaComment, FaPencilAlt } from 'react-icons/fa'
import Sidebar from '../Shared/UserDashboard/Sidebar'
import Reviews from "../Reviews/Reviews";
import { findArtistReviewService, findAllGivenReviewService, updateReviewService } from '../../services/review/review'
import './user.scss'

const AllReviews = () => {

  const [user, setUser] = useState([])
  const [reviews, setReviews] = useState([])
  const [given, setGivenReviews] = useState([])
  useEffect(async () => {
    var result = await UserProfileService()
    const id = result.id
    setUser(result);

    result = await findArtistReviewService(id)
    setReviews(result)

    result = await findAllGivenReviewService(id)
    setGivenReviews(result)
  }, [])

  return (
    <WebsiteLayout>
      <Container className="mx-0 px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">
            <h1>Reviews</h1>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Recieved Reviews">
                <Reviews reviews={reviews} />
              </Tab>
              <Tab eventKey="profile" title="My Reviews">
                <Row>
                  {given.map((item, i) => (
                    <GivenReview review={item} key={i} />
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

const GivenReview = (prop) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [review, setReview] = useState(prop.review)
  const ratingRef = useRef()
  const reviewRef = useRef()

  useEffect(() => {
    setReview(prop.review)
  }, [prop])

  const update = (id) => {
    updateReviewService(ratingRef.current.value, reviewRef.current.value, review.id)
  }

  return (
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control ref={ratingRef}
                    className="border-dark p-3 shadow-sm"
                    as="select">
                    <option value="">Select Rating</option>
                    {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1].map(rating => (
                       <option>{rating}</option>
                    ))}
                  </Form.Control>
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Edit Reviews"
              >
                <Form.Control
                  as="textarea" ref={reviewRef}
                  placeholder="Leave a review here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={update}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <h6>{review.name}</h6>
        <span>(Rating {review.rating})</span>
        <div className="mt-2">
          <p className="mb-0">
            {review.review}
          </p>
        </div>
      </Card>
    </Col>
  )
}

export default AllReviews;

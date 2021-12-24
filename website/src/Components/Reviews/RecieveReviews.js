import {useEffect, useState} from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'

import { createReviewService, findArtworkReviewService } from '../../services/review/review'
import Reviews from './Reviews'

const RecieveReviews = (prop) => {

  const [name, setName] = useState()
  const [rating, setRating] = useState()
  const [review, setReview] = useState()

  const [artworkId, setArtworkId] = useState()
  const [reviews, setReviews] = useState([])
  const [avgRating, setAvgRating] = useState()
  useEffect(async () => {
    setArtworkId(prop.artworkId)

    const result = await findArtworkReviewService(prop.artworkId)
    setReviews(JSON.parse(`[${result.reviews}]`))
    setAvgRating(result.rating)
  }, [prop])

  const submit = async () => {
    await createReviewService(name, rating, review, artworkId)
  }

  return (
    <Container fluid>
      <Form className="p-3">
        <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control onChange={(e) => setName(e.target.value)}
                    className="border-dark p-3 shadow-sm"
                   type="text" placeholder="Full name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control onChange={(e) => setRating(e.target.value)}
                    className="border-dark p-3 shadow-sm"
                    as="select">
                    <option value="">Select Rating</option>
                    {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1].map(rating => (
                       <option>{rating}</option>
                    ))}
                  </Form.Control>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Review</Form.Label>
                  <Form.Control onChange={(e) => setReview(e.target.value)}
                  className="border-dark p-3 shadow-sm"
                  as="textarea" size="lg" />
              </Form.Group>
            </Col>
        </Row>
        <Button className="mt-3 px-5 py-3 rounded-pill"
          variant="dark" onClick={submit}>
          Submit Review
        </Button>
      </Form>
      {reviews && (
        <Reviews reviews={reviews} avgRating={avgRating} />
      )}
    </Container>
  )
}

export default RecieveReviews

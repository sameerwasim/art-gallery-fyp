import {useEffect, useState} from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import {FaStar, FaStarHalf} from 'react-icons/fa'

const Reviews = (prop) => {

  const [rating, setRating] = useState()
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    if (prop.avgRating) { setRating(prop.avgRating) }
    setReviews(prop.reviews)
  }, [prop])

  return (
    <Container className="my-5 artwork">
        {rating && (
          <h4 className="mb-0">Average Rating ({rating})</h4>
        )}
        <Row>
            {reviews && reviews.map(review => review && (
                <Col lg={6} md={6}>
                    <Card className="border-0 shadow p-4 mt-4">
                        <h6 className="mb-0">{review.name}</h6>
                        <div className="text-warning">
                            {[...Array(parseInt(review.rating))].map((x, i) =>
                              <FaStar key={i} />
                            )}
                            {(review.rating && review.rating.toString().includes('.')) && <FaStarHalf />}
                        </div>
                        <div style={{fontSize: '0.8rem'}}>
                            {new Date(review.createdAt).toLocaleString()}
                        </div>
                        <div className="mt-2">
                            <p className="mb-0">
                            {review.review}
                            </p>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Reviews;

import {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { findAllReviewService } from '../../services/review/review'
import Reviews from '../Reviews/Reviews'

const Review = () => {

  const [reviews, setReviews] = useState([])
  useEffect(async () => {
    const result = await findAllReviewService(6)
    setReviews(result);
  }, [])

  return (
    <Container className="mb-5 artwork">
      <h1 className="mb-4">Latest Reviews</h1>
      <Reviews reviews={reviews}  />
    </Container>
  )
}

export default Review

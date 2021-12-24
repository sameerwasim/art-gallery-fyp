import { useEffect, useState, lazy, Suspense } from 'react'
import WebsiteLayout from "../Layouts/Website.layout";
import { useParams, Link } from 'react-router-dom'
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { FaClock, FaTag } from "react-icons/fa";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { findOneArtworkService } from '../../services/artwork/artwork'
import { app } from '../../configuration/app.config'
import { urlHelper } from '../../helpers'

const RecieveReviews = lazy(() => import('../Reviews/RecieveReviews'))

const Artwork = () => {

  const { id } = useParams()
  const [artwork, setArtwork] = useState([])
  const [artworkId, setArtworkId] = useState()
  const [artworkImages, setArtworkImages] = useState([])
  const [similars, setSimilars] = useState([])
  useEffect(async () => {
    const split = id.split('-')
    setArtworkId(split[split.length - 1])
    const result = await findOneArtworkService(split[split.length - 1])
    setArtwork(result)
    setArtworkImages(JSON.parse(`[${result.images}]`))
    setSimilars(JSON.parse(`[${result.similars}]`))
  }, [id])

  return (
    <WebsiteLayout>
      <Container className="px-lg-5 py-lg-5 p-2">
        <Row className="mb-5">
          <Col lg={5} md={12}>
            <Card className="border-0">
              <Splide
                options={{
                  rewind: true,
                  width: 800,
                  gap: "1rem",
                  breakpoints: {
                    1440 : {perPage : 1, perMove : 1 },
                    480 :  { perPage: 1 , perMove: 1}
                  },
                }}
              >
                {artworkImages.map((image, i) => (
                  <SplideSlide>
                    <img style={{objectFit:'contain'}} width="100%" height="400px"
                      src={`${app.apiUrl}public/${image.image}`} alt={`${artwork.title} ${i}`} key={i} />
                  </SplideSlide>
                ))}
              </Splide>
            </Card>
          </Col>
          <Col lg={7} md={12} className="mt-md-1 mt-lg-0 mt-1">
              <Card className="shadow p-4 border-0">
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold mb-0">{artwork.title}</h5>
                    <h5 className="fw-bold mb-0">#{artwork.id}</h5>
                  </div>
                  <small style={{fontSize: '0.7rem'}} className="text-muted">
                    <FaClock /> <span className="mt-2 me-2">{new Date(artwork.createdAt).toLocaleString()},</span>
                    <FaTag /> <span className="mt-2">{artwork.category}</span>
                  </small>
                  <p className="my-2">{artwork.description}</p>
                  <h6 className="text-success text-end fw-bold">PKR {artwork.price}</h6>
              </Card>
              <Card className="mt-3 p-3 border-0 shadow">
                <Link to={`/artist/${artwork.username}`} style={{textDecoration: 'none'}} className="text-dark">
                  <Row>
                    <Col sm={2}>
                      <div className="d-flex justify-content-center">
                        <img className="shadow-sm img-fluid rounded-circle" src={(artwork.image === 'no-user-profile-picture.jpeg')
                          ? `${app.appUrl}no-user-profile-picture.jpeg` : `${app.apiUrl}public/${artwork.image}`}
                          height="100px" width="100px" alt={`${artwork.name} Profile Picture`} />
                      </div>
                    </Col>
                    <Col sm={10}>
                      <h2 className="mt-1">{artwork.name}</h2>
                      <h6 className="text-muted">@{artwork.username}</h6>
                    </Col>
                    <Col sm={12} className="p-4">
                      <h4>About {artwork.name}</h4>
                      <p>{artwork.description}</p>
                    </Col>
                  </Row>
                </Link>
              </Card>
          </Col>
        </Row>
        <hr/>
        <Row className="my-4">
          <h3>More Artworks by {artwork.name}</h3>
          {similars && similars.slice(0,6).map(similar => (
            <Col lg={4} md={6} className="my-4">
                <Link to={`/artwork/${urlHelper(similar.title)}-${similar.id}`} style={{textDecoration: 'none'}}>
                  <Card className="border-0 shadow p-3">
                      <Image style={{objectFit:'contain', width:'100%', height:'300px'}} src={similar.thumbnail} alt={similar.title} />
                      <div className="text-center">
                          <h6 className="mb-0 text-dark">{similar.title}</h6>
                      <small className="text-muted">By: {similar.name}</small>
                      </div>
                  </Card>
                </Link>
            </Col>
          ))}
        </Row>
        <hr/>
        <Suspense fallback={<div>Loading Reviews</div>}>
          <Row className="my-4">
            <h3>Reviews </h3>
            <RecieveReviews artworkId={artworkId} />
          </Row>
        </Suspense>
      </Container>
    </WebsiteLayout>
  );
};

export default Artwork;

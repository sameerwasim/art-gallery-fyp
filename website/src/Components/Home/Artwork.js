import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WebsiteLayout from '../Layouts/Website.layout'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'
import { findArtworksService } from '../../services/artwork/artwork'
import { findAllService } from '../../services/authentication/authentication'
import { urlHelper } from '../../helpers'
import { app } from '../../configuration/app.config'

const Artwork = () => {

  const [artworks, setArtworks] = useState([])
  const [artists, setArtists] = useState([])
  useEffect(async () => {
    var result = await findArtworksService(8)
    setArtworks(result)

    result = await findAllService(8)
    setArtists(result)
  }, [])

  return (
    <Container className="m-lg-5 m-0 px-md-5 artwork">
        {/*==================================== Artwork ============================= */}
        <Row>
          <Col>
            <h1>Artworks(s)</h1>
          </Col>
          <Col><div className="mt-2 d-flex justify-content-end">
            <Link className="btn btn-dark" to="/search/artworks">
              View All
            </Link>
          </div></Col>
        </Row>
        <Row className="my-5">
          {artworks && artworks.map(artwork => (
            <Col lg={4} md={6} className="my-4">
                <Link to={`/artwork/${urlHelper(artwork.title)}-${artwork.id}`} style={{textDecoration: 'none'}}>
                  <Card className="border-0 shadow p-3">
                      <Image style={{objectFit:'contain', width:'100%', height:'300px'}} src={artwork.thumbnail} alt={artwork.title} />
                      <div className="text-center">
                          <h6 className="mb-0 text-dark">{artwork.title}</h6>
                      <small className="text-muted">By: {artwork.name}</small>
                      </div>
                  </Card>
                </Link>
            </Col>
          ))}
        </Row>
        <hr/>
        {/*=========================== Artist ===============================*/}
        <Row>
          <Col>
            <h1>Artworks(s)</h1>
          </Col>
          <Col><div className="mt-2 d-flex justify-content-end">
            <Link className="btn btn-dark" to="/search/artists">
              View All
            </Link>
          </div></Col>
        </Row>
        <Row className="mt-5">
          {artists && artists.map(artist => (
            <Col lg={2} md={4}>
                <Link to={`/artist/${urlHelper(artist.username)}`} style={{textDecoration: 'none'}}>
                  <Card className="border-0 p-3">
                      <div className="d-flex justify-content-center">
                        <img className="shadow-sm img-fluid rounded-circle" src={(artist.image === 'no-user-profile-picture.jpeg')
                          ? `${app.appUrl}no-user-profile-picture.jpeg` : `${app.apiUrl}public/${artist.image}`}
                          height="100px" width="100px" alt={`${artist.name} Profile Picture`} />
                      </div>
                      <div className="text-center text-dark p-3">
                        <h6>{artist.name}</h6>
                      </div>
                  </Card>
                </Link>
            </Col>
          ))}
        </Row>
    </Container>
  )
}

export default Artwork

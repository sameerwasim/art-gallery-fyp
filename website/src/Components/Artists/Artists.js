import WebsiteLayout from '../Layouts/Website.layout'
import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { app } from '../../configuration/app.config'
import { urlHelper } from '../../helpers'
import { findArtistArtworksService } from '../../services/artwork/artwork'
import { findOneService } from '../../services/authentication/authentication'

const Artist = () => {

  const {username} = useParams()
  const [artworks, setArtworks] = useState([])
  const [artist, setArtist] = useState([])
  useEffect(async () => {
    var result = await findOneService(username)
    setArtist(result)

    result = await findArtistArtworksService(result.id)
    setArtworks(result)
  }, [username])

  return (
    <WebsiteLayout>
        <Container className="px-5">
            <Row className="my-5">
                <Col lg={3} md={12}>
                    <Card className="shadow border-0">
                      <img className="shadow-sm img-fluid w-100" src={(artist.image === 'no-user-profile-picture.jpeg')
                        ? `${app.appUrl}no-user-profile-picture.jpeg` : `${app.apiUrl}public/${artist.image}`}
                        alt={`${artist.name} Profile Picture`} />
                        <div className="p-3 text-center">
                            <h6 className="mb-0">{artist.name} <span className="text-muted">(Rating {artist.rating})</span></h6>
                            <small className="text-muted">@{artist.username}</small><br/>
                        </div>
                    </Card>
                    <Card className="border-0 shadow p-4 my-4 ">
                        <h6>About {artist.name}</h6>
                        <p>{artist.description}</p>
                        <hr />
                        <h6>Contact Info</h6>
                        <small>{artist.phone}</small>
                        <small>{artist.email}</small>

                    </Card>
                </Col>
                <Col lg={9} md={12}>
                    <h4>{artist.name} Artworks</h4>
                    <Row>
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
                </Col>
            </Row>
        </Container>
    </WebsiteLayout>
  )
}

export default Artist

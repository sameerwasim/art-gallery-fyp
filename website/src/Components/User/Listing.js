import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from '../Shared/UserDashboard/Sidebar'
import { UserProfileService } from '../../services/authentication/authentication'
import { findArtistArtworksService } from '../../services/artwork/artwork'
import { FaPencilAlt } from 'react-icons/fa'
import { urlHelper } from '../../helpers'
import './user.scss'

const Listing = () => {

  const [user, setUser] = useState([])
  const [artworks, setArtworks] = useState([])
  useEffect(async () => {
    var result = await UserProfileService()
    setUser(result);

    result = await findArtistArtworksService(result.id)
    setArtworks(result)
  }, [])

  return (
    <WebsiteLayout>
      <Container className="mx-0 px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">

            <Container fluid>
              <Row>
                <Col md={6}><h1>My Artworks</h1></Col>
                <Col md={6}>
                  <div className="d-flex justify-content-md-end">
                    <Link className="btn btn-dark mt-2" to="/add/listing">Add Artowrk</Link>
                  </div>
                </Col>
              </Row>

              <Row>
                {artworks && artworks.map(artwork => (
                  <Col lg={4} md={6} className="my-4">
                      <Link to={`/edit/listing/${urlHelper(artwork.title)}-${artwork.id}`} style={{textDecoration: 'none'}}>
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
            </Container>

          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default Listing;

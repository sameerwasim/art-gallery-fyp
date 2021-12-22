import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from '../Shared/UserDashboard/Sidebar'
import { UserProfileService } from '../../services/authentication/authentication'
import { findArtistArtworksService } from '../../services/artwork/artwork'
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
      <Container fluid className="px-0">
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
                      <Card className="border-0 shadow p-3">
                          <Image style={{objectFit:'cover', width:'100%', height:'300px'}} src={artwork.thumbnail} alt={artwork.title} />
                          <div className="p-3 text-center">
                              <h6 className="mb-0">{artwork.title}</h6>
                          <small className="text-muted">By: {artwork.name}</small>
                          </div>
                      </Card>
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

import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserProfileService } from '../../services/authentication/authentication'
import Sidebar from '../Shared/UserDashboard/Sidebar'
import './user.scss'

const Listing = () => {

  const [user, setUser] = useState([])
  useEffect(async () => {
    const result = await UserProfileService()
    setUser(result);
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
            </Container>

          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default Listing;

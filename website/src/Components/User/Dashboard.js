import { lazy, Suspense } from 'react'
import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Alert
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from '../Shared/UserDashboard/Sidebar'
import { UserProfileService, VerifyAccountRepeatService } from '../../services/authentication/authentication'
import { app } from '../../configuration/app.config'
import './user.scss'

const Dashboard = () => {

  const [user, setUser] = useState([])
  useEffect(async () => {
    var result = await UserProfileService()
    setUser(result);
  }, [])

  return (
    <WebsiteLayout>
      <Container className="mx-0 px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">

            <h1>Dashboard</h1>
            <span>Welcome, {user.name}!</span>

            <div className="mt-3">
              {(user && !user.isVerified) && (
                <Alert variant="danger">
                  <h5>Account Not Verified</h5>
                  <p>
                    Please, Complete the details of your account. Also,
                    Verify your account to start listing your artworks on Art Gallery.
                   </p>
                   <span className="text-primary" style={{'cursor': 'pointer'}} onClick={() => VerifyAccountRepeatService(user.id)}>Verify Now</span>
                </Alert>
              )}
            </div>

            <Row className="mt-4">
              <Col sm={2}>
                <div className="d-flex justify-content-center">
                  <img className="shadow-sm img-fluid rounded-circle" src={(user.image === 'no-user-profile-picture.jpeg')
                    ? `${app.appUrl}no-user-profile-picture.jpeg` : `${app.apiUrl}public/${user.image}`}
                    height="100px" width="100px" />
                </div>
              </Col>
              <Col sm={10}>
                <div className="d-flex justify-content-between">
                  <div>
                    <h2 className="mt-3">{user.name}</h2>
                    <h6 className="text-muted">@{user.username}</h6>
                  </div>
                  <div className="d-flex flex-column justify-content-end">
                    <span className="fw-bold">My Total Artworks: <span className="text-muted">{user.totalArtworks}</span></span>
                    <span className="fw-bold">Total Artworks Views: <span className="text-muted"></span></span>
                  </div>
                </div>
              </Col>
              <Col sm={12} className="p-4 px-md-5">
                <h4>About Me</h4>
                <p>{user.description}</p>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default Dashboard;

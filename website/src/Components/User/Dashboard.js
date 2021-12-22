import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from '../Shared/UserDashboard/Sidebar'
import { UserProfileService } from '../../services/authentication/authentication'
import './user.scss'

const Dashboard = () => {

  const [user, setUser] = useState([])
  useEffect(async () => {
    var result = await UserProfileService()
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

            <h1>Dashboard</h1>
            <span>Welcome, {user.name}!</span>
            <Container fluid>
                <Row>
                  <Col>

                  </Col>
                </Row>
            </Container>

          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default Dashboard;

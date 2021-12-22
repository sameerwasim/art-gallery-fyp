import WebsiteLayout from '../Layouts/Website.layout'
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Sidebar from '../Shared/UserDashboard/Sidebar'
import './user.scss'

const Dashboard = () => {
  return (
    <WebsiteLayout>
      <Container fluid className="px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">
            <div className="text-center">
              <h1 className="display-1 mt-5 pt-5">
                ONLINE ART GALLERY
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default Dashboard;

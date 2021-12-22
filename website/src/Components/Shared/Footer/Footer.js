import {Container, Row, Col, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Container fluid className="p-lg-4 p-2">
        <Row>
          <Col lg={7} md={4} >
            <div className="align-self-end">
              <p className="my-5 text-center text-md-start">Art Gallery &copy; All rights reserved.</p>
            </div>
          </Col>

          <Col lg={5} md={4}>
            <div className="text-white d-flex justify-content-center">
              <span className="px-2"><FaInstagram /></span>
              <span className="px-2"><FaLinkedin /></span>
              <span className="px-2"><FaEnvelope /></span>
            </div>
            <hr style={{backgroundColor:'white',height:'2px'}}/>
            <div className="d-flex justify-content-center">
              <Link className="px-2 text-decoration-none text-white" to="/artists">Artist</Link>
              <Link className="px-2 text-decoration-none text-white" to="/artwork">Artworks</Link>
              <Link className="px-2 text-decoration-none text-white" to="/reviews">Reviews</Link>
            </div>
            <div className="d-flex justify-content-center">
              <Link className="px-2 text-decoration-none text-white" to="/contact">
                <small className="text-muted">Contact</small>
              </Link>
              <Link className="px-2 text-decoration-none text-white" to="/about">
                <small className="text-muted">About</small>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

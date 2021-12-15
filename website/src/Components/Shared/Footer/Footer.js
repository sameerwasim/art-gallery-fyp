import {Container, Row, Col} from 'react-bootstrap'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col><p>1</p></Col>
          <Col><p>2</p></Col>
          <Col><p>3</p></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

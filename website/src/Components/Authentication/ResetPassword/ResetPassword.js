import { useRef } from 'react'
import WebsiteLayout from '../../Layouts/Website.layout'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { ResetPasswordService } from '../../../services/authentication/authentication'
import { toast } from 'react-toastify'

const ResetPassword = () => {

  const emailRef = useRef()

  const submit = async () => {
    const email = emailRef.current.value
    const response = await ResetPasswordService(email)
  }

  return (
    <WebsiteLayout>
      <Container className="my-5">
        <div className="d-flex justify-content-center">
          <Col md={4} xs={12}>
            <Card className="shadow-sm rounded-0 bg-light">
              <Card.Body className="py-4">
                <Card.Title className="text-center"><h4>Reset Password</h4></Card.Title>
                <Container className="my-5">
                  <Form.Group className="py-2">
                    <Form.Label>Email or Username</Form.Label>
                    <Form.Control ref={emailRef} type="text" size="sm" className="shadow-sm rounded-0"
                      placeholder="Email or Username" />
                  </Form.Group>
                  <div className="d-flex justify-content-end py-2">
                    <Button onClick={submit} size="sm" className="rounded-0 px-4" variant="dark">
                      Reset
                    </Button>
                  </div>
                  <div className="text-center mt-3" style={{fontSize: '0.85rem'}}>
                    Don't have an account?{' '}
                    <Link to="/sign-up">Create an account</Link>
                  </div>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Container>
    </WebsiteLayout>
  )
}

export default ResetPassword

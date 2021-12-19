import { useRef } from 'react'
import WebsiteLayout from '../../Layouts/Website.layout'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { SignInService } from '../../../services/authentication/authentication'
import { Auth } from '../../../Context/Auth.context'
import { toast } from 'react-toastify'

const SignIn = () => {

  const navigate = useNavigate()
  const auth = Auth()

  const emailRef = useRef()
  const passwordRef = useRef()

  const submit = async () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const response = await SignInService(email, password)

    if (response.error === 0) {
      localStorage.setItem('token', response.token)
      localStorage.setItem('refreshCycle', true)
      localStorage.setItem('user', JSON.stringify(response.user))
      auth.activateToken(response.token)
      auth.activateAuthentication(true)
      navigate('/dashboard')
    } else {
      toast.warn('Incorrect Email or Password', {autoClose: false})
    }

  }

  return (
    <WebsiteLayout>
      <Container className="my-5">
        <div className="d-flex justify-content-center">
          <Col md={4} xs={12}>
            <Card className="shadow-sm rounded-0 bg-light">
              <Card.Body className="py-4">
                <Card.Title className="text-center"><h4>Sign In</h4></Card.Title>
                <Container className="my-5">
                  <Form.Group className="py-2">
                    <Form.Label>Email or Username</Form.Label>
                    <Form.Control ref={emailRef} type="text" size="sm" className="shadow-sm rounded-0"
                      placeholder="Email or Username" />
                  </Form.Group>
                  <Form.Group className="py-2">
                    <Row>
                      <Col><Form.Label>Password</Form.Label></Col>
                      <Col className="text-end">
                        <Link to="/reset-password" style={{textDecoration: 'none', fontSize: '0.8rem'}}>Reset Password</Link>
                      </Col>
                    </Row>
                    <Form.Control ref={passwordRef} type="password" size="sm" className="shadow-sm rounded-0"
                      placeholder="Password" />
                  </Form.Group>
                  <div className="d-flex justify-content-end py-2">
                    <Button onClick={submit} size="sm" className="rounded-0 px-4" variant="dark">
                      Sign In
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

export default SignIn

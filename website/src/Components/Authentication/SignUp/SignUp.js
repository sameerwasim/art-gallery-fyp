import { useRef, useState } from 'react'
import WebsiteLayout from '../../Layouts/Website.layout'
import { Link } from 'react-router-dom'
import { Container, Col, Card, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { SignUpService } from '../../../services/authentication/authentication'

const SignUp = () => {

  const nameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const [emailError, setEmailError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)

  const submit = () => {
    if (!(emailError && usernameError)) {
      const name = nameRef.current.value
      const username = usernameRef.current.value
      const email = emailRef.current.value
      const password = passwordRef.current.value
      SignUpService(name, username, email, password)
    } else {
      toast.error('Enter valid username or email')
    }
  }

  {/* Function to verify email */}
  const verifyEmail = (email) => {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(email))
      setEmailError(true)
    else
      setEmailError(false)
  }

  {/* Function to verify username */}
  const verifyUsername = (username) => {
    var usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    if(!usernameRegex.test(username))
      setUsernameError(true)
    else
      setUsernameError(false)
  }

  return (
    <WebsiteLayout>
      <Container className="my-5">
        <div className="d-flex justify-content-center">
          <Col md={4} xs={12}>
            <Card className="shadow-sm rounded-0 bg-light">
              <Card.Body className="py-4">
                <Card.Title className="text-center"><h4>Sign Up</h4></Card.Title>
                <Container className="my-5">
                  <Form.Group className="py-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" size="sm" className="shadow-sm rounded-0"
                      placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="py-2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control ref={usernameRef} type="text" size="sm" className="shadow-sm rounded-0"
                      placeholder="Username" onChange={(event) => verifyUsername(event.target.value)} />
                    {usernameError &&
                      (<span className="text-danger" style={{fontSize: '0.9rem'}}>Incorrect Username Format</span>)}
                  </Form.Group>
                  <Form.Group className="py-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="text" size="sm" className="shadow-sm rounded-0"
                      placeholder="Email" onChange={(event) => verifyEmail(event.target.value)} />
                      {emailError &&
                        (<span className="text-danger" style={{fontSize: '0.9rem'}}>Incorrect Email Format</span>)}
                  </Form.Group>
                  <Form.Group className="py-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" size="sm" className="shadow-sm rounded-0"
                      placeholder="Password" />
                  </Form.Group>
                  <div className="d-flex justify-content-end py-2">
                    <Button onClick={submit} size="sm" className="rounded-0 px-4" variant="dark">
                      Sign In
                    </Button>
                  </div>
                  <div className="text-center mt-3" style={{fontSize: '0.85rem'}}>
                    Already have an account?{' '}
                    <Link to="/sign-in">Sign In</Link>
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

export default SignUp

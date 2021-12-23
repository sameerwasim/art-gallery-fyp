import { useState, useEffect, useRef } from 'react'
import WebsiteLayout from '../Layouts/Website.layout'
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserProfileService, UpdateProfileService } from '../../services/authentication/authentication'
import Sidebar from '../Shared/UserDashboard/Sidebar'
import './user.scss'

const Profile = () => {

  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [phone, setPhone] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()

  useEffect(async () => {
    var result = await UserProfileService()

    setName(result.name)
    setUsername(result.username)
    setPhone(result.phone)
    setDescription(result.description)
  }, [])

  const update = async () => {
    await UpdateProfileService(name, phone, description, image)
  }

  return (
    <WebsiteLayout>
      <Container className="mx-0 px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">

            <h1>{`${name}'s`} Profile</h1>
            <Form className="p-3">
              <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)}
                          className="border-dark p-3 shadow-sm"
                         type="text" placeholder="Full name" value={name} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control readonly="true"
                        className="border-dark p-3 shadow-sm"
                        type="text" placeholder="Username" value={username} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onChange={(e) => setPhone(e.target.value)}
                        className="border-dark p-3 shadow-sm"
                        type="email" placeholder="Phone" value={phone} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control className="border-dark p-3 shadow-sm"
                           type="file" size="lg" onChange={(e) => setImage(e.target.files[0])} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>About Me</Form.Label>
                        <Form.Control onChange={(e) => setDescription(e.target.value)}
                        className="border-dark p-3 shadow-sm"
                        as="textarea" size="lg" value={description} />
                    </Form.Group>
                  </Col>
              </Row>
              <Button className="mt-3 px-5 py-3 rounded-pill"
                variant="dark" onClick={update}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default Profile;

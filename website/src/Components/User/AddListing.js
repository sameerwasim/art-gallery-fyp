import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from '../Shared/UserDashboard/Sidebar'
import './user.scss'
import { UserProfileService } from '../../services/authentication/authentication'
import { findAllCategoryService } from '../../services/categories/categories'

const AddListing = () => {

  const [user, setUser] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    var result = await UserProfileService()
    setUser(result);

    var result = await findAllCategoryService()
    console.log(result);
    setCategories(result);
  }, [])

  const [files, setFiles] = useState([])
  const uploadMultipleFilesPreview = (e) => {
    var fileArray = []; var fileObj = [];
    fileObj.push(e.target.files)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    setFiles(fileArray)
  }

  return (
    <WebsiteLayout>
      <Container fluid className="px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">

            <h1>Add Listing</h1>
            <Form className="m-3 ">
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control size="sm"
                      className="p-3 shadow-sm border border-dark"
                      type="text"
                      placeholder="Enter title"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Control size="sm"
                      className="p-3 shadow-sm border border-dark"
                      as="select"
                      placeholder="Enter category"
                    >
                    <option value="">Select category</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Size</Form.Label>
                    <Form.Control size="sm"
                      className="p-3 shadow-sm border border-dark"
                      type="text"
                      placeholder="Enter size in inches"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control size="sm"
                      className="p-3 shadow-sm border border-dark"
                      as="textarea"
                      placeholder="Enter description"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Artwork Images</Form.Label>
                    <Form.Control type="file" multiple onChange={(e) => uploadMultipleFilesPreview(e)} />
                  </Form.Group>
                </Col>
              </Row>
              <div className="preview-images">
                {(files || []).map(url => (
                  <img src={url} alt="..." />
                ))}
              </div>
              <Button
                className="rounded-pill px-4 py-2 mt-3"
                variant="dark"
                type="submit"
              >
                Submit
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  );
};

export default AddListing;

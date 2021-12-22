import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect, useRef } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from '../Shared/UserDashboard/Sidebar'
import './user.scss'
import { UserProfileService } from '../../services/authentication/authentication'
import { findAllCategoryService } from '../../services/categories/categories'
import { createArtworkService } from '../../services/artwork/artwork'

const AddListing = () => {

  const title = useRef()
  const category = useRef()
  const size = useRef()
  const description = useRef()
  const price = useRef()

  const [user, setUser] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    var result = await UserProfileService()
    setUser(result);

    var result = await findAllCategoryService()
    setCategories(result.categories);
  }, [])

  const [files, setFiles] = useState([])
  const [images, setImages] = useState([])
  const uploadMultipleFilesPreview = (e) => {
    var fileArray = []; var fileObj = [];
    fileObj.push(e.target.files)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    setFiles(fileArray)
    setImages(fileObj[0])
  }

  const navigate = useNavigate()
  const submit = async () => {
    const titleVal = title.current.value
    const categoryVal = category.current.value
    const descriptionVal = description.current.value
    const sizeVal = size.current.value
    const priceVal = price.current.value

    const res = await createArtworkService(titleVal, categoryVal, descriptionVal, sizeVal, priceVal, images)
    if (res)
      navigate('/listing')
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
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control size="sm" ref={title}
                      className="p-3 shadow-sm border border-dark"
                      type="text"
                      placeholder="Enter title"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control size="sm" ref={category}
                      className="p-3 shadow-sm border border-dark"
                      as="select"
                      placeholder="Enter category"
                    >
                    <option value="">Select category</option>
                    {categories && categories.map(category => (
                      <option key={category.id} value={category.id}>{category.category}</option>
                    ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Size</Form.Label>
                    <Form.Control size="sm" ref={size}
                      className="p-3 shadow-sm border border-dark"
                      type="text"
                      placeholder="Enter size in inches"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control size="sm" ref={price}
                      className="p-3 shadow-sm border border-dark"
                      type="text"
                      placeholder="Enter Price"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control size="sm" ref={description}
                      className="p-3 shadow-sm border border-dark"
                      as="textarea" maxLength="300"
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
                {(files || []).map((url, i)=> (
                  <img src={url} key={i} />
                ))}
              </div>
              <Button
                className="rounded-pill px-4 py-2 mt-3"
                variant="dark"
                onClick={submit}
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

import WebsiteLayout from '../Layouts/Website.layout'
import { useState, useEffect, useRef } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from '../Shared/UserDashboard/Sidebar'
import './user.scss'
import { UserProfileService, VerifyAccountRepeatService } from '../../services/authentication/authentication'
import { findAllCategoryService } from '../../services/categories/categories'
import { editArtworkService, findOneArtworkService } from '../../services/artwork/artwork'

const EditListing = () => {

  const {id} = useParams()

  const [artworkId, setArtworkId] = useState()
  const [artwork, setArtwork] = useState()
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()
  const [size, setSize] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()

  const [user, setUser] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    var result = await UserProfileService()
    setUser(result);

    result = await findAllCategoryService()
    setCategories(result.categories);

    const split = id.split('-')
    setArtworkId(split[split.length - 1])
    result = await findOneArtworkService(split[split.length - 1])
    setArtwork(result);

    setTitle(result.title)
    setCategory(result.category)
    setSize(result.size)
    setDescription(result.description)
    setPrice(result.price)
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
    const id = artworkId
    const titleVal = title
    const categoryVal = category
    const descriptionVal = description
    const sizeVal = size
    const priceVal = price

    const res = await editArtworkService(id, titleVal, categoryVal, descriptionVal, sizeVal, priceVal, images)
    if (res)
      navigate('/thank-you')
  }



  return (
    <WebsiteLayout>
      <Container className="mx-0 px-0">
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar active="dashboard" />
          </Col>
          <Col md={9} className="content">

            <h1>Edit Listing</h1>

            <div className="mt-3">
              {(user && !user.isVerified) && (
                <Alert variant="danger">
                  <h5>Account Not Verified</h5>
                  <p>
                    Please, Complete the details of your account. Also,
                    Verify your account to start listing your artworks on Art Gallery.
                   </p>
                   <span className="text-primary" style={{'cursor': 'pointer'}} onClick={() => VerifyAccountRepeatService(user.id)}>Verify Now</span>
                </Alert>
              )}
            </div>

            <Form className="m-3 ">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control size="sm" value={title}
                      className="p-3 shadow-sm border border-dark"
                      type="text" onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter title"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control size="sm"
                      className="p-3 shadow-sm border border-dark"
                      as="select" onChange={(e) => setCategory(e.target.value)}
                      placeholder="Enter category"
                    >
                    <option value="">Select category</option>
                    {categories && categories.map(item => (
                      <option key={item.id} selected={category == item.category && `true`} value={item.id}>{item.category}</option>
                    ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Size</Form.Label>
                    <Form.Control size="sm" value={size}
                      className="p-3 shadow-sm border border-dark"
                      type="text" onChange={(e) => setSize(e.target.value)}
                      placeholder="Enter size in inches"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control size="sm" value={price}
                      className="p-3 shadow-sm border border-dark"
                      type="text" onChange={(e) => setPrice(e.target.price)}
                      placeholder="Enter Price"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control size="sm" value={description}
                      className="p-3 shadow-sm border border-dark"
                      as="textarea" maxLength="300"  onChange={(e) => setDescription(e.target.price)}
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

export default EditListing;

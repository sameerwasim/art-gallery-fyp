import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import WebsiteLayout from '../Layouts/Website.layout'
import { Container, Card, Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import { findArtworksService } from '../../services/artwork/artwork'
import { findAllCategoryService } from '../../services/categories/categories'
import { urlHelper } from '../../helpers'

const Search = () => {

  const { category } = useParams()

  const [search, setSearch] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    if (category == 'artworks') {
      const result = await findArtworksService(18)
      setSearch(result)
    }

    var result = await findAllCategoryService()
    setCategories(result.categories);
  }, [category])


  return (
    <WebsiteLayout>
        <Container className="Search px-lg-5 px-0">
            <Row className="p-5">
                <Col md={3}>
                    <h5>Search <span className="text-capitalize">{category}</span></h5>

                    <Form className="mt-3">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Title</Form.Label>
                            <Form.Control className="p-3 shadow-sm border border-dark" type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Artist</Form.Label>
                            <Form.Control className="p-3 shadow-sm border border-dark" type="text" placeholder="Enter artist" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Category</Form.Label>
                          <Form.Control size="sm"
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
                        <Button className="rounded-pill px-4 py-2 mt-3" variant="dark" type="submit">
                          <FaSearch /> &nbsp;Search
                        </Button>
                    </Form>
                </Col>
                <Col md={9} className="">
                    <Row>
                      {category && (category == 'artworks')
                        && search.map(artwork => (
                          <Col lg={4} md={6} className="my-4">
                              <Link to={`/artwork/${urlHelper(artwork.title)}-${artwork.id}`} style={{textDecoration: 'none'}}>
                                <Card className="border-0 shadow p-3">
                                    <Image style={{objectFit:'contain', width:'100%', height:'300px'}} src={artwork.thumbnail} alt={artwork.title} />
                                    <div className="text-center">
                                        <h6 className="mb-0 text-dark">{artwork.title}</h6>
                                    <small className="text-muted">By: {artwork.name}</small>
                                    </div>
                                </Card>
                              </Link>
                          </Col>
                      ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </WebsiteLayout>
  )
}

export default Search

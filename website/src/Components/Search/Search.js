import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import WebsiteLayout from '../Layouts/Website.layout'
import { Container, Card, Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import { findArtworksService } from '../../services/artwork/artwork'
import { findAllService } from '../../services/authentication/authentication'
import { findAllCategoryService } from '../../services/categories/categories'
import { urlHelper } from '../../helpers'
import { app } from '../../configuration/app.config'

const Search = () => {

  const { category } = useParams()

  const [artist, setArtist] = useState([])
  const [search, setSearch] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    var result = await findAllService('')
    const artistResult = result
    setArtist(result)

    result = await findAllCategoryService()
    setCategories(result.categories);

    if (category == 'artworks') {
      const result = await findArtworksService('')
      setSearch(result)
    } else if (category == 'artists') {
      setSearch(artistResult)
    }
  }, [category])

  const titleRef = useRef()
  const artistRef = useRef()
  const categoryRef = useRef()

  const submit = async () => {
    if (category === 'artists') {
      const result = await findAllService('', artistRef.current.value, categoryRef.current.value)
      setSearch(result)
    } else if (category === 'artworks') {
      const result = await findArtworksService('', titleRef.current.value, artistRef.current.value, categoryRef.current.value)
      setSearch(result)
    }
  }


  return (
    <WebsiteLayout>
        <Container className="Search px-lg-5 px-0">
            <Row className="p-5">
                <Col md={3}>
                    <h5>Search <span className="text-capitalize">{category}</span></h5>

                    <Form className="mt-3">
                        {category === 'artworks' && (
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Title</Form.Label>
                              <Form.Control ref={titleRef} className="p-3 shadow-sm border border-dark" type="text" placeholder="Enter title" />
                          </Form.Group>
                        )}
                        <Form.Group className="mb-3">
                          <Form.Label>Artist</Form.Label>
                          <Form.Control size="sm"
                            className="p-3 shadow-sm border border-dark"
                            as="select" ref={artistRef}
                            placeholder="Enter category"
                          >
                          <option value="">Select artist</option>
                          {artist && artist.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                          ))}
                          </Form.Control>
                        </Form.Group>
                        {category === 'artworks' && (
                          <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control size="sm"
                              className="p-3 shadow-sm border border-dark"
                              as="select" ref={categoryRef}
                              placeholder="Enter category"
                            >
                            <option value="">Select category</option>
                            {categories && categories.map(category => (
                              <option key={category.id} value={category.id}>{category.category}</option>
                            ))}
                            </Form.Control>
                          </Form.Group>
                        )}
                        <Button type="button" className="rounded-pill px-4 py-2 mt-3" variant="dark" onClick={submit}>
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

                      {category && (category == 'artists')
                        && search.map(artist => (
                          <Col md={4}>
                              <Link to={`/artist/${urlHelper(artist.username)}`} style={{textDecoration: 'none'}}>
                                <Card className="border-0 p-3">
                                    <div className="d-flex justify-content-center">
                                      <img className="shadow-sm img-fluid rounded-circle" src={(artist.image === 'no-user-profile-picture.jpeg')
                                        ? `${app.appUrl}no-user-profile-picture.jpeg` : `${app.apiUrl}public/${artist.image}`}
                                        height="100px" width="100px" alt={`${artist.name} Profile Picture`} />
                                    </div>
                                    <div className="text-center text-dark p-3">
                                      <h6>{artist.name}</h6>
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

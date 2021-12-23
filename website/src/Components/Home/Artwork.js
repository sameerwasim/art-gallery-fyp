import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WebsiteLayout from '../Layouts/Website.layout'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'
import { findArtworksService } from '../../services/artwork/artwork'
import { urlHelper } from '../../helpers'

const Artwork = () => {

  const [artworks, setArtworks] = useState([])
  useEffect(async () => {
    const result = await findArtworksService(8)
    setArtworks(result)
  }, [])

  return (
    <Container className="m-lg-5 m-0 px-md-5 px-0 artwork">
        {/*==================================== Artwork ============================= */}
        <Row>
          <Col>
            <h1>Artworks(s)</h1>
          </Col>
          <Col><div className="mt-2 d-flex justify-content-md-end">
            <Link className="btn btn-dark" to="/search/artworks">
              View All
            </Link>
          </div></Col>
        </Row>
        <Row className="my-5">
          {artworks && artworks.map(artwork => (
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
        <hr/>
        {/*=========================== Artist ===============================*/}
        <Row className="mt-5">
        <h1 className="mb-4">Artist(s)</h1>
                <Col  lg={2} md={4}>
                    <Card className="border-0 p-3">
                        <div className="d-flex justify-content-center">
                        <Image width="150px" height="150px" style={{objectFit:'cover'}} className="rounded-circle" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className="text-center p-3">
                            <h6>Artist Name</h6>
                        </div>
                    </Card>
                </Col>
                <Col  lg={2} md={4}>
                    <Card className="border-0 p-3">
                        <div className="d-flex justify-content-center">
                        <Image width="150px" height="150px" style={{objectFit:'cover'}} className="rounded-circle" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

                        </div>
                        <div className="text-center p-3">
                            <h6>Artist Name</h6>
                        </div>
                    </Card>
                </Col>
                <Col  lg={2} md={4}>
                    <Card className="border-0 p-3">
                        <div className="justify-content-center d-flex">
                        <Image width="150px" height="150px" style={{objectFit:'cover'}} className="rounded-circle" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className="text-center p-3">
                            <h6>Artist Name</h6>
                        </div>
                    </Card>
                </Col>

                <Col  lg={2} md={4}>
                    <Card className="border-0 p-3">
                        <div className="d-flex justify-content-center">
                        <Image width="150px" height="150px" style={{objectFit:'cover'}} className="rounded-circle" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                        </div>
                        <div className="text-center p-3">
                            <h6>Artist Name</h6>
                        </div>
                    </Card>
                </Col>
                <Col  lg={2} md={4}>
                    <Card className="border-0 p-3">
                        <div className="d-flex justify-content-center">
                        <Image width="150px" height="150px" style={{objectFit:'cover'}} className="rounded-circle" src="https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHBlb3BsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className="text-center p-3">
                            <h6>Artist Name</h6>
                        </div>
                    </Card>
                </Col>
                <Col  lg={2} md={4}>
                    <Card className="border-0 p-3">
                        <div className="d-flex justify-content-center">
                        <Image width="150px" height="150px" style={{objectFit:'cover'}} className="rounded-circle" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

                        </div>
                        <div className="text-center p-3">
                            <h6>Artist Name</h6>
                        </div>
                    </Card>
                </Col>
        </Row>
    </Container>
  )
}

export default Artwork

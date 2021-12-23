import { useEffect, useState } from 'react'
import WebsiteLayout from "../Layouts/Website.layout";
import { useParams } from 'react-router-dom'
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Reviews from '../Home/Reviews';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Artwork = () => {

  const { id } = useParams()

  return (
    <WebsiteLayout>
      <Container className="px-lg-5 py-lg-5 p-2">
        <Row className="mb-5">
          <Col lg={5} md={12}>
            <Card className="border-0">
            <Splide
              options={{
                rewind: true,
                width: 800,

                gap: "1rem",
                breakpoints: {
                     1440 : {perPage : 1, perMove : 1 },
                     480 :  { perPage: 1 , perMove: 1}
                },
              }}
            >
              <SplideSlide>
                <img style={{objectFit:'cover'}} width="100%" height="450px" src="https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image 1" />

              </SplideSlide>
              <SplideSlide>
                <img style={{objectFit:'cover'}} width="100%" height="450px" src="https://images.unsplash.com/photo-1573491601995-695e5154f91b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image 2" />
              </SplideSlide>
            </Splide>
            </Card>
          </Col>
          <Col lg={7} md={12} className="mt-md-4 mt-lg-0 mt-4">
              <Card className="shadow p-4 border-0">
                    <h5 className="fw-bold">Price : <small className="text-muted">000</small></h5>
                    <h5 className="fw-bold">Category : <span className="text-muted">Abc</span></h5>
                    <h5 className=""> <strong>Description :</strong> &nbsp;
                        <small className="text-muted">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv</small>
                    </h5>
              </Card>
              <Card className="mt-3 p-3 border-0 shadow">
                <div className="d-flex flex-md-row flex-column">
                    <div className="d-flex justify-content-center">
                      <Image width="160px" height="160px" style={{objectFit:'cover'}} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-circle mb-3" />
                    </div>
                  <div className="ms-3 align-self-center">
                      <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        {/* <h5>Name : <small className="text-muted">Sameer Waseem</small></h5>
                        <h5>Category : <small className="text-muted">Abc</small></h5>
                        <h5>Phone # : <small className="text-muted">000-0000</small></h5>
                        <h5>Email : <small className="text-muted">email@example.com</small></h5> */}
 <p> an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
                  </div>
                </div>
            </Card>
          </Col>
        </Row>
        <hr/>
        <Row className="my-5">

        </Row>

               <Reviews />

      </Container>
    </WebsiteLayout>
  );
};

export default Artwork;

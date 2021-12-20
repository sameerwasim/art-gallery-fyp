import WebsiteLayout from "../Layouts/Website.layout";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { FaSmile, FaStar } from "react-icons/fa";
const Thankyou = () => {
  return (
    <>
      {/*==================================== Thankyou ============================= */}
    <WebsiteLayout>
      <Container className="mb-5 artwork">
            <div className="d-flex justify-content-center p-5">
            <Card  className="text-center p-5 shadow border-0">
              <h1>  Thank You For Your Order!</h1>
              <p>While you are for your order, do not forget to subscribe</p>
            <h1 className="text-center"><FaSmile /></h1>
            </Card >
            
                </div> 
                <p>
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a
</p>       
      </Container>
      </WebsiteLayout>
    </>
  );
};

export default Thankyou;

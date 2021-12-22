import WebsiteLayout from "../Layouts/Website.layout";
import { Container, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { FaSmile, FaStar } from "react-icons/fa";

const ThankYou = () => {
  return (
    <WebsiteLayout>
      <Container className="mb-5 artwork">
        <div className="d-flex justify-content-center p-5">
          <Card  className="text-center p-5 border-0">
            <h1 className="text-center display-1"><FaSmile /></h1>
            <h1>Thank You For Listing your Artworks</h1>
            <p>Please wait, and browse Art Gallery while we verify your artwork</p>
            <Link to="/" className="text-muted">Go To Home</Link>
          </Card >
        </div>
      </Container>
    </WebsiteLayout>
  );
};

export default ThankYou;

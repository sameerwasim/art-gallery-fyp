import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const Reviews = () => {
  return (
    <>
      <Card className="border-0 shadow p-4 ">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="d-flex flex-wrap">
            <div>
              <Image
                width="60px"
                height="60px"
                src="https://via.placeholder.com/150"
                alt=""
                className="rounded-circle"
              />
            </div>
            <div className="align-self-center ms-3">
              <h6 className="">Sameer Waseem</h6>
              <div className="d-flex text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="ms-0 text-dark ps-2">5.0</span>
              </div>
            </div>
          </div>
          <div className="">1 Hour ago</div>
        </div>
        <div className="mt-2">
          <p className="mb-0">
            he 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.  scrambled it to make a type specimen book.  scrambled it to make a type specimen book.
          </p>
        </div>
      </Card>
    </>
  );
};

export default Reviews;

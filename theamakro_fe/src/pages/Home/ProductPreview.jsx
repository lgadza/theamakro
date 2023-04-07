import { Button, Col, Container, Row } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import Button1 from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLock,
  faMessage,
  faMoneyBill,
  faShareNodes,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const ProductPreview = () => {
  return (
    <Container className="px-0 mx-0">
      <img
        className="item-preview-img"
        src="https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg"
        alt="item"
      />
      <Row className="mx-2">
        <div className="d-flex my-3 justify-content-between align-items-center">
          <span className="d-flex align-items-center">
            <Avatar
              width={50}
              height={50}
              src={
                "https://img.freepik.com/darmowe-ikony/awatara_318-158392.jpg"
              }
              alt={"avatar"}
            />

            <small className="mx-2 d-flex flex-column text-start">
              <small>lgadza</small>
              <small>No reviews yet</small>
            </small>
          </span>
          <Button variant="outline-primary" className="px-3 my-1">
            <small>Ask seller</small>
          </Button>
        </div>
      </Row>
      <hr className="my-0 py-0 bg-white" />

      <Row className="mx-3 my-2">
        <span className="text-start">
          <strong>Black Jean</strong>
        </span>
        <div className="d-flex justify-content-between">
          <span>PLN25.00</span>
        </div>
        <div className="d-flex flex-column text-start">
          <small className="text-mute">Brand</small>
          <small className="text-mute">Size</small>
        </div>
        <Link className="text-success text-start my-2">
          <small>Buyer Protection</small>
          <FontAwesomeIcon
            className="bd-highlight mx-1"
            icon={faShield}
            style={{ fontSize: "15px" }}
          />
        </Link>
      </Row>
      <Row className="mx-3">
        <Button variant="outline-primary bg-primary" className="my-1 w-100">
          <small className="text-light">Buy now</small>
        </Button>
        <Button variant="outline-primary" className="my-1 w-100">
          <small>Make an offer</small>
        </Button>
      </Row>
      <Row className="my-3 mx-3">
        <hr className="my-0 py-0 bg-white" />
        <div className="d-flex justify-content-around">
          <Link className="my-2">
            <FontAwesomeIcon
              className="bd-highlight mx-1"
              icon={faHeart}
              style={{ color: "white", fontSize: "18px" }}
            />
            <small className="text-light">Favorite</small>
          </Link>
          <Link className="my-2">
            <FontAwesomeIcon
              className="bd-highlight mx-1"
              icon={faShareNodes}
              style={{ color: "white", fontSize: "18px" }}
            />
            <small className="text-light">Share</small>
          </Link>
        </div>
        <hr className="my-0 py-0 bg-white" />
      </Row>
      <Row className="mx-2">
        <span className="text-start">
          <strong>Item Description</strong>
        </span>
        <p className="text-start">
          <small>
            Chickens are gregarious birds and live together in flocks. They have
            a communal approach to the incubation of eggs and raising of young.
          </small>
          <br />
          <Link className="">
            <small>more</small>
          </Link>
        </p>
      </Row>
      <hr className="my-0 py-0 bg-white" />
      <Row className="mx-2">
        <span className="text-start py-1 d-flex justify-content-between">
          <strong>Postage</strong>
          <small>From 5 USD</small>
        </span>
        <p className="text-start py-3 bg">
          <div className="d-flex bd-highlight">
            <FontAwesomeIcon
              className="bd-highlight"
              icon={faMoneyBill}
              style={{ color: "white", fontSize: "20px" }}
            />
            <div>
              <small className="text-light bd-highlight mx-3">
                <strong>Refund Policy</strong>
              </small>
              <ul className="text-light mx-3">
                <small>You can receive a refund if your order : </small>
                <li>
                  <small>was never shipped or is lost</small>
                </li>
                <li>
                  <small>arrives damaged</small>
                </li>
                <li>
                  <small>is significantly not as described</small>
                </li>
              </ul>
              <small>
                You have 5 days to submit your claim from when you're notified
                that the item was delivered,, even if the item never arrived.
              </small>
              <br />
              <small>
                Buyers cover the cost of returning an item unless agreed
                otherwise. Learn more in our <Link>Refund Policy.</Link>{" "}
              </small>
            </div>
          </div>
          <div className="d-flex bd-highlight my-3">
            <FontAwesomeIcon
              className="bd-highlight"
              icon={faLock}
              style={{ color: "white", fontSize: "20px" }}
            />
            <div className="d-flex flex-column text-start">
              <small className="text-light mx-3">
                <strong>Secure payments</strong>
              </small>

              <small className="text-light mx-3">
                Payments are encrypted by our payment partner, so your money is
                always sent and received safely.
              </small>
            </div>
          </div>
          <div className="d-flex bd-highlight">
            <FontAwesomeIcon
              className="bd-highlight"
              icon={faMessage}
              style={{ color: "white", fontSize: "20px" }}
            />
            <div className="d-flex flex-column text-start">
              <small className="text-light bd-highlight mx-3">
                <strong>Our support</strong>
              </small>

              <small className="text-light mx-3">
                Reach out to our support team at any time, theyare here to help
                you!
              </small>
            </div>
          </div>
        </p>
      </Row>
      <hr className="my-0 py-0 bg-white" />
      <Row className="mx-3">
        <div className="d-flex justify-content-around">
          <Link className="my-2">
            <small className="text-light py-2 underline-active">
              Seller's items
            </small>
          </Link>
          <Link className="my-2">
            <small className="text-light">Similar items</small>
          </Link>
        </div>
      </Row>
      <hr className="my-0 py-0 bg-white" />
      <Row className="mx-2 my-4">
        <div className="d-flex justify-content-between">
          <span className="d-flex flex-column text-start">
            <small>
              <strong>Shop bundles</strong>
            </small>
            <small>Save on postage</small>
          </span>
          <Button variant="outline-primary" className="px-4 my-1">
            <small>Shop</small>
          </Button>
        </div>
        {[...Array(20)].map((item, index) => {
          return (
            <Col className="my-2" xs={6} sm={6}>
              <Link to="item_preview">
                <ProductCard width="100%" height="10rem" />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default ProductPreview;

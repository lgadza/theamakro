import { Button, Container, Row } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import Button1 from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductPreview = () => {
  return (
    <Container fluid className="px-0 my-0 mx-0">
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
      <Row className="mx-2">
        <div className="d-flex justify-items-around">
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
      </Row>
    </Container>
  );
};
export default ProductPreview;

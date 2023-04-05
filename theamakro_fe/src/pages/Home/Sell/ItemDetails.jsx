import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ItemDetails = () => {
  return (
    <Container className="px-0 category">
      <h6 className="text-start">Sell item</h6>
      <div>
        <span>Add up to 10 photos.</span>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload photos</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </div>
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <small className="text-light bd-highlight">Accessories</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
    </Container>
  );
};
export default ItemDetails;

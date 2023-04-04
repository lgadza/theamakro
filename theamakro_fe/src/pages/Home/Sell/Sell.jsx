import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ItemDetails = () => {
  return (
    <Container className="px-0">
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <small className="text-light bd-highlight">Accessories</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight mx-3"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
    </Container>
  );
};
export default ItemDetails;

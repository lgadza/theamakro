import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonDress,
  faSearch,
  faUser,
  faEnvelope,
  faCirclePlus,
  faAngleRight,
  faPerson,
  faPersonBreastfeeding,
  faHome,
  faStar,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
const Category = () => {
  return (
    <Container className="px-0">
      <hr className="my-0 py-0 bg-white mt-3" />
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faPersonDress}
            style={{ color: "white", fontSize: "20px" }}
          />
          <FontAwesomeIcon className="bd-highlight" icon={faAngleRight} />
          <small className="text-light bd-highlight">Women</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "20px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faPerson}
            style={{ color: "white", fontSize: "20px" }}
          />
          <FontAwesomeIcon className="bd-highlight" icon={faAngleRight} />
          <small className="text-light bd-highlight">Men</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "20px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faPersonBreastfeeding}
            style={{ color: "white", fontSize: "20px" }}
          />
          <FontAwesomeIcon className="bd-highlight" icon={faAngleRight} />
          <small className="text-light bd-highlight">Kids</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "20px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faHome}
            style={{ color: "white", fontSize: "18px" }}
          />
          <FontAwesomeIcon className="bd-highlight" icon={faAngleRight} />
          <small className="text-light bd-highlight">Home</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faStar}
            style={{ color: "white", fontSize: "18px" }}
          />
          <FontAwesomeIcon className="bd-highlight" icon={faAngleRight} />
          <small className="text-light bd-highlight">Entertainment</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faCar}
            style={{ color: "white", fontSize: "18px" }}
          />
          <FontAwesomeIcon className="bd-highlight" icon={faAngleRight} />
          <small className="text-light bd-highlight">Vehicle</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3 px-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faDog}
            style={{ color: "white", fontSize: "18px" }}
          />
          <FontAwesomeIcon className="bd-highlight" icon={faAngleRight} />
          <small className="text-light bd-highlight">Animals</small>
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
export default Category;

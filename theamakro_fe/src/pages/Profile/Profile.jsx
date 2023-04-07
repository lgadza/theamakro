import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Row, Spinner } from "react-bootstrap";
import {
  faAngleRight,
  faBagShopping,
  faCircleExclamation,
  faCircleQuestion,
  faFaceSmile,
  faFileSignature,
  faGear,
  faHeart,
  faPercent,
  faScaleBalanced,
  faShield,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Button1 from "../../components/Button";
import { useState } from "react";
import Avatar from "../../components/Avatar";

const Profile = () => {
  return (
    <Container className="px-0 category">
      <h6 className="text-start my-3">Profile</h6>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex my-2">
        <Avatar width={40} height={40} alt={"profile"} />
        <span className="d-flex flex-column text-start mx-2">
          <small>
            <strong>lgadza</strong>
          </small>
          <span>View my profile</span>
        </span>
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex py-3  justify-content-between align-items-center">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faHeart}
            style={{ color: "white", fontSize: "20px" }}
          />

          <small className="text-light bd-highlight mx-3">Favorite</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faSliders}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">Personalize</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faBagShopping}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">My orders</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faPercent}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">Make discounts</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faGear}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">Settings</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faCircleExclamation}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">
            About Thea-makro
          </small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faCircleQuestion}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">Help</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faScaleBalanced}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">
            Legal information
          </small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faFileSignature}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">
            Terms & Conditions
          </small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faShield}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">Privacy Policy</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight"
            icon={faFaceSmile}
            style={{ color: "white", fontSize: "20px" }}
          />
          <small className="text-light bd-highlight mx-3">Your feedback</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>

      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      {/* </Row> */}
    </Container>
  );
};
export default Profile;

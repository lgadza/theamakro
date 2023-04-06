import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Row, Spinner } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button1 from "../../../components/Button";
import { useState } from "react";
import Avatar from "../../../components/Avatar";

const Profile = () => {
  return (
    <Container className="px-0 category">
      <h6 className="text-start">Profile</h6>
      <hr className="my-0 py-0 bg-white" />
      <div>
        <Avatar width={40} height={40} alt={"profile"} />
        <span>
          <small>
            <strong>lgadza</strong>
          </small>
          <span>View my profile</span>
        </span>
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex py-3  justify-content-between align-items-center">
        <span className="d-flex bd-highlight">
          <small className="text-light bd-highlight">Category</small>
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
          <small className="text-light bd-highlight">Brand</small>
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
          <small className="text-light bd-highlight">Condition</small>
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
          <small className="text-light text-success bd-highlight ">
            <strong>Price</strong>
          </small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight text-success"
          icon={faAngleRight}
          style={{ fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <hr className="my-0 py-0 bg-white" />
      {/* </Row> */}
      <div className="d-flex justify-content-between align-items-center mt-5 py-3">
        <span className="d-flex bd-highlight">
          <small className="text-light bd-highlight">
            What do you think of upload process?
          </small>
        </span>
        <Button1 btn_id="Feedback"></Button1>
      </div>
      {/* <hr className="my-0 py-0 bg-white" /> */}
    </Container>
  );
};
export default Profile;

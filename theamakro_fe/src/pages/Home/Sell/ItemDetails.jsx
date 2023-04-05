import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Row, Spinner } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button1 from "../../../components/Button";
import { useState } from "react";

const ItemDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [isPut, setPut] = useState(false);
  const isLoading = false;
  return (
    <Container className="px-0 category">
      <h6 className="text-start">Sell item</h6>
      <div>
        <div>Add up to 10 photos.</div>
        <label className="textColor3 mt-3" htmlFor="item-img">
          <small className="text-success border-success border p-2 rounded">
            Upload photos
          </small>
        </label>
        <input
          id="item-img"
          type="file"
          style={{ visibility: "hidden" }}
          label="picture"
          //   onChange={handleAvatar}
        />
      </div>
      <Row className="pb-3 px-0 mb-3">
        <div className="d-flex justify-content-between py-0  align-items-center">
          <Form.Group className=" w-100 px-3  item-details mt-2 ">
            <Form.Label className="d-flex">Title</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-0  px-0"
              placeholder="e.g. Black Skin Jean"
            />
          </Form.Group>
          {isLoading && isPut && <Spinner animation="grow" size="sm" />}
          {/* {!isEditing && (
          <span>
            <Icon.PencilFill onClick={() => setIsEditing(true)} size={15} />
          </span>
        )} */}
          {/* {isEditing && (
          <span className="d-flex align-items-center">
            <span>{name.length}</span>

            <Icon.Check2
              onClick={() => {
                setIsEditing(false);
                updateMe();
              }}
              size={15}
            />
          </span>
        )} */}
        </div>
        {/* <hr className="my-0 px-3" /> */}

        <div className="d-flex mt-3 px-3 ">
          {/* <span className="text-success">Email</span> */}
        </div>
        <div className="d-flex justify-content-between py-0     align-items-center">
          <Form.Group className=" w-100  item-details mt-2 px-3 ">
            <Form.Label className="d-flex">Description</Form.Label>
            <Form.Control
              as="textarea"
              style={{ minHeight: "20px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-0 px-0"
              placeholder="e.g. only used a few times"
            />
          </Form.Group>
          {isLoading && isPut && <Spinner animation="grow" size="sm" />}
          {/* {!isEditingEmail && (
          <span>
            <Icon.PencilFill
              onClick={() => setIsEditingEmail(true)}
              size={15}
            />
          </span>
        )} */}
          {/* {isEditingEmail && (
          <span className="d-flex align-items-center">
            <span>{email.length}</span>

            <Icon.Check2
              onClick={() => {
                setIsEditingEmail(false);
                updateMe();
              }}
              size={15}
            />
          </span>
        )} */}
        </div>
      </Row>
      {/* <Row className="background"> */}
      <hr className="my-0 py-0 bg-white" />
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
export default ItemDetails;

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
  faShoePrints,
  faBagShopping,
  faPalette,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Category = () => {
  const [category, setCategory] = useState(true);
  const [categoryWomen, setCategoryWomen] = useState(false);
  return (
    <>
      {categoryWomen && <WomanCategory />}

      {category && (
        <Container className="px-0 category">
          <hr className="my-0 py-0 bg-white mt-3" />
          <div
            role="button"
            onClick={() => {
              setCategory(false);
              setCategoryWomen(true);
            }}
            className="d-flex justify-content-between align-items-center py-3"
          >
            <span className="d-flex bd-highlight">
              <FontAwesomeIcon
                className="bd-highlight mx-3"
                icon={faPersonDress}
                style={{ color: "white", fontSize: "20px" }}
              />

              <small className="text-light bd-highlight">Women</small>
            </span>
            <FontAwesomeIcon
              className="bd-highlight mx-3"
              icon={faAngleRight}
              style={{ color: "white", fontSize: "20px" }}
            />
          </div>
          <hr className="my-0 py-0 bg-white" />
          <div className="d-flex justify-content-between align-items-center py-3">
            <span className="d-flex bd-highlight">
              <FontAwesomeIcon
                className="bd-highlight mx-3"
                icon={faPerson}
                style={{ color: "white", fontSize: "20px" }}
              />

              <small className="text-light bd-highlight">Men</small>
            </span>
            <FontAwesomeIcon
              className="bd-highlight mx-3"
              icon={faAngleRight}
              style={{ color: "white", fontSize: "20px" }}
            />
          </div>
          <hr className="my-0 py-0 bg-white" />
          <div className="d-flex justify-content-between align-items-center py-3">
            <span className="d-flex bd-highlight">
              <FontAwesomeIcon
                className="bd-highlight mx-3"
                icon={faPersonBreastfeeding}
                style={{ color: "white", fontSize: "20px" }}
              />

              <small className="text-light bd-highlight">Kids</small>
            </span>
            <FontAwesomeIcon
              className="bd-highlight mx-3"
              icon={faAngleRight}
              style={{ color: "white", fontSize: "20px" }}
            />
          </div>
          <hr className="my-0 py-0 bg-white" />
          <div className="d-flex justify-content-between align-items-center py-3">
            <span className="d-flex bd-highlight">
              <FontAwesomeIcon
                className="bd-highlight mx-3"
                icon={faHome}
                style={{ color: "white", fontSize: "18px" }}
              />

              <small className="text-light bd-highlight">Home</small>
            </span>
            <FontAwesomeIcon
              className="bd-highlight mx-3"
              icon={faAngleRight}
              style={{ color: "white", fontSize: "18px" }}
            />
          </div>
          <hr className="my-0 py-0 bg-white" />
          <div className="d-flex justify-content-between align-items-center py-3">
            <span className="d-flex bd-highlight">
              <FontAwesomeIcon
                className="bd-highlight mx-3"
                icon={faStar}
                style={{ color: "white", fontSize: "18px" }}
              />

              <small className="text-light bd-highlight">Entertainment</small>
            </span>
            <FontAwesomeIcon
              className="bd-highlight mx-3"
              icon={faAngleRight}
              style={{ color: "white", fontSize: "18px" }}
            />
          </div>
          <hr className="my-0 py-0 bg-white" />
          <div className="d-flex justify-content-between align-items-center py-3">
            <span className="d-flex bd-highlight">
              <FontAwesomeIcon
                className="bd-highlight mx-3"
                icon={faCar}
                style={{ color: "white", fontSize: "18px" }}
              />

              <small className="text-light bd-highlight">Vehicle</small>
            </span>
            <FontAwesomeIcon
              className="bd-highlight mx-3"
              icon={faAngleRight}
              style={{ color: "white", fontSize: "18px" }}
            />
          </div>
          <hr className="my-0 py-0 bg-white" />
          <div className="d-flex justify-content-between align-items-center py-3">
            <span className="d-flex bd-highlight">
              <FontAwesomeIcon
                className="bd-highlight mx-3"
                icon={faDog}
                style={{ color: "white", fontSize: "18px" }}
              />

              <small className="text-light bd-highlight">Animals</small>
            </span>
            <FontAwesomeIcon
              className="bd-highlight mx-3"
              icon={faAngleRight}
              style={{ color: "white", fontSize: "18px" }}
            />
          </div>
          <hr className="my-0 py-0 bg-white" />
        </Container>
      )}
    </>
  );
};
export default Category;

const WomanCategory = () => {
  return (
    <Container className="px-0 category">
      <hr className="my-0 py-0 bg-white mt-3" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight mx-3"
            icon={faPersonDress}
            style={{ color: "white", fontSize: "20px" }}
          />

          <small className="text-light bd-highlight">Clothes</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight mx-3"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "20px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight mx-3"
            icon={faShoePrints}
            style={{ color: "white", fontSize: "20px" }}
          />

          <small className="text-light bd-highlight">Shoes</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight mx-3"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "20px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight mx-3"
            icon={faBagShopping}
            style={{ color: "white", fontSize: "20px" }}
          />

          <small className="text-light bd-highlight">Bags</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight mx-3"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight mx-3"
            icon={faPalette}
            style={{ color: "white", fontSize: "18px" }}
          />

          <small className="text-light bd-highlight">Beauty</small>
        </span>
        <FontAwesomeIcon
          className="bd-highlight mx-3"
          icon={faAngleRight}
          style={{ color: "white", fontSize: "18px" }}
        />
      </div>
      <hr className="my-0 py-0 bg-white" />
      <div className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex bd-highlight">
          <FontAwesomeIcon
            className="bd-highlight mx-3"
            icon={faGem}
            style={{ color: "white", fontSize: "18px" }}
          />

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

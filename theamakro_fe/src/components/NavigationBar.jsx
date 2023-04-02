import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import {
  faHouse,
  faSearch,
  faUser,
  faEnvelope,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import "../style/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavigationBar = () => {
  return (
    <Navbar>
      <Container className="nav-container text-center mx-0 d-flex align-items-center justify-content-center px-0">
        <Row className="w-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="p-0">
            <ul className="d-flex w-100 align-items-center my-0 py-2 justify-content-between px-4">
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link
                  to="/home"
                  className="d-flex align-items-center justify-content-center flex-column"
                >
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Home</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link
                  to="category"
                  className="d-flex align-items-center justify-content-center flex-column"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Search</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link className="d-flex align-items-center justify-content-center flex-column">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Messages</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link className="d-flex align-items-center justify-content-center flex-column">
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Sell</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link className="d-flex align-items-center justify-content-center flex-column">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Profile</small>
                </Link>
              </li>
            </ul>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;

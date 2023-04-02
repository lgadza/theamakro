import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";
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
      <SearchBar />
      <Container className="nav-container text-center px-0">
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <ul className="d-flex align-items-center my-0 py-2 justify-content-between px-4">
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link to="/home">
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Home</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link>
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Search</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Messages</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Sell</small>
                </Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Link>
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

const SearchBar = () => {
  return (
    <Container>
      <Form className="d-flex w-100" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="mx-0"
          aria-label="Search"
        />
      </Form>
    </Container>
  );
};
// export default SearchBar

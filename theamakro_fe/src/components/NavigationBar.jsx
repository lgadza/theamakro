import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
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
                <Nav.Link>
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Home</small>
                </Nav.Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Nav.Link>
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Search</small>
                </Nav.Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Nav.Link>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Messages</small>
                </Nav.Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Nav.Link>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Sell</small>
                </Nav.Link>
              </li>
              <li className="d-flex align-items-center justify-content-center flex-column">
                <Nav.Link>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <small>Profile</small>
                </Nav.Link>
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

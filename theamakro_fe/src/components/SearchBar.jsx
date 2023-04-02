import { Container, Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Container className="search-container">
      <Form onSubmit={(e) => e.preventDefault()}>
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
export default SearchBar;

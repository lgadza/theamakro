import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import "../../style/Home.css";
const Home = () => {
  return (
    <Container className="mt-5 home">
      <Row>
        <Col className="my-2" xs={12} sm={6}>
          <ProductCard />
        </Col>
        <Col className="my-2" xs={12} sm={6}>
          <ProductCard />
        </Col>
        <Col className="my-2" xs={12} sm={6}>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;

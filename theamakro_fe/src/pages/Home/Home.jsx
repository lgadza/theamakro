import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import "../../style/Home.css";
import Button1 from "../../components/Button";
import Avatar from "../../components/Avatar";

const Home = () => {
  return (
    <Container className="mt-5 home">
      <Row className="mb-2">
        <small className="text-light pb-3">
          Sign in so we can tailor make your TheaMakro experience
        </small>
        <div className="d-flex justify-content-around">
          <Button1 btn_id="Register" />
          <Button1 btn_id="Sign in" />
        </div>
      </Row>
      <Row>
        <div className="slide-content d-flex my-2">
          {[...Array(10)].map((brand, index) => {
            return (
              <div className="d-flex flex-column align-items-center justify-content-center py-2 mx-2">
                <Avatar
                  width={80}
                  height={80}
                  src={
                    "https://img.freepik.com/darmowe-ikony/awatara_318-158392.jpg"
                  }
                  alt={"avatar"}
                  className="p-3 brand-container"
                />
                <div className="ml-2">
                  <small>Steve</small>
                </div>
              </div>
            );
          })}
        </div>
      </Row>
      {[...Array(4)].map((brands, index) => {
        return (
          <Row>
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                <h6 className="mb-0 text-start">CROPP</h6>
                <small>Brands you might like</small>
              </div>
              <small className="text-success align-item-end">See all</small>
            </div>
            <div className="slide-content d-flex align-items-center my-2">
              {[...Array(10)].map((brand, index) => {
                return (
                  <div className="d-flex flex-column align-items-center justify-content-center py-2 mx-2">
                    <ProductCard width={"10rem"} height={"10rem"} />
                  </div>
                );
              })}
              <div role="button" className="text-nowrap text-success">
                See all
              </div>
            </div>
          </Row>
        );
      })}
      <Row>
        {[...Array(20)].map((item, index) => {
          return (
            <Col className="my-2" xs={6} sm={6}>
              <ProductCard width="100%" height="10rem" />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Home;

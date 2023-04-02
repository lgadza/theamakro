import { Card } from "react-bootstrap";
import Avatar from "./Avatar";
import ProductImg from "./ProductImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const ProductCard = () => {
  return (
    <Card>
      <Card.Header>
        <Avatar
          width={20}
          height={20}
          src={"https://img.freepik.com/darmowe-ikony/awatara_318-158392.jpg"}
          alt={"avatar"}
        />
        <small>lgadza</small>
      </Card.Header>
      <Card.Body>
        <ProductImg width={100} height={150} alt="product_img" />
        <Card.Text>
          <div className="d-flex justify-content-between">
            <span>PLN25.00</span>
            <span>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "white", fontSize: "20px" }}
              />
              <span>100</span>
            </span>
          </div>
          <p>Brand</p>
          <p>Size</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;

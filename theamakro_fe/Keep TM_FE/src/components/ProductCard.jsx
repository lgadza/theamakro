import { Card } from "react-bootstrap";
import Avatar from "./Avatar";
import ProductImg from "./ProductImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ width, height }) => {
  return (
    <Card className="product-card">
      <Card.Header className="d-flex align-items-center">
        <Avatar
          width={30}
          height={30}
          src={"https://img.freepik.com/darmowe-ikony/awatara_318-158392.jpg"}
          alt={"avatar"}
          className="mr-3"
        />

        <small className="mx-2">lgadza</small>
      </Card.Header>
      <Card.Body className="w-100 p-0 m-0">
        <ProductImg
          width={width}
          height={height}
          alt="product_img"
          src="https://expertreviews.b-cdn.net/sites/expertreviews/files/2023/03/best_android_smartphone_uk_2023_phones.jpg"
        />
        <Card.Text className="p-2">
          <div className="d-flex justify-content-between">
            <span>PLN25.00</span>
            <span>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "white", fontSize: "13px" }}
              />
              <small className="mx-1">100</small>
            </span>
          </div>
          <div className="d-flex flex-column text-start">
            <small className="text-mute">Brand</small>
            <small className="text-mute">Size</small>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;

import React from "react";

const ProductImg = ({ src, alt, width, height }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: `${width}`, height: `${height}` }}
    className="product-card"
  />
);

export default ProductImg;

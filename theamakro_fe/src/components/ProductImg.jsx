import React from "react";

const ProductImg = ({ src, alt, width, height }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: `${width}px`, height: `${height}px` }}
  />
);

export default ProductImg;

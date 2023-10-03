import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      ProductDetails
      <h4>Product ID: {productId}</h4>
    </div>
  );
};

export default ProductDetails;

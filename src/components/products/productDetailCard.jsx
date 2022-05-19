import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailCard = () => {
  let { id } = useParams();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default ProductDetailCard;

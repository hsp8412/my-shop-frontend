import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card d-flex" style={{ width: "18rem", height: "30rem" }}>
      <img src={product.imgUrl} className="card-img-top" alt="productImage" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h5 className="card-title">${product.price}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">
          Add To Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

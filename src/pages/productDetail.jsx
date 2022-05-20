import React, { useEffect } from "react";
import ProductDetailCard from "../components/products/productDetailCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/products-actions";

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.products.productToDisplay);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch]);

  return (
    <div>
      <ProductDetailCard product={product} />
    </div>
  );
};

export default ProductDetail;

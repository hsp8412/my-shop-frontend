import React, { useEffect } from "react";
import ProductDetailCard from "../components/products/productDetailCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/products-actions";
import LoginPrompt from "../components/products/loginPrompt";

const ProductDetail = () => {
  let { uuid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(uuid));
  }, [dispatch]);

  return (
    <div>
      <ProductDetailCard/>
      <LoginPrompt/>
    </div>
  );
};

export default ProductDetail;

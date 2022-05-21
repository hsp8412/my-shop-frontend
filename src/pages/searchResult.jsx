import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products-actions";
import { useParams } from "react-router-dom";
import ProductList from "../components/products/productList";
import _ from "lodash";

const SearchResult = () => {
  const { key } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.itemList);
  const productsPerRow = useSelector((state) => state.products.itemsPerRow);

  useEffect(() => {
    if (products === []) dispatch(fetchProducts());
  }, [dispatch]);

  let display = [];
  const keys = key.split(" ");
  console.log(keys);

  products.forEach((product) => {
    let ifDisplay = false;
    keys.forEach((key) => {
      if (
        product.name.toLowerCase().includes(key.toLowerCase()) ||
        product.description.toLowerCase().includes(key.toLowerCase())
      ) {
        ifDisplay = true;
      }
    });
    if (ifDisplay) {
      display.push(product);
    }
  });

  display = _.chunk(display, productsPerRow);

  const renderResult = () => {
    console.log(display);
    if (display.length === 0) {
      console.log("hi");
      return (
        <div className="d-flex justify-content-center mt-4">
          <h3>Sorry, no result found. </h3>
        </div>
      );
    }
    return <ProductList display={display} />;
  };

  return (
    <div>
      <div className="container mt-3">
        <h3>Search result for "{keys}":</h3>
      </div>
      {renderResult()}
    </div>
  );
};

export default SearchResult;

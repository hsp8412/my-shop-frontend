import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products-actions";
import ProductList from "../components/products/productList";
import _ from "lodash";
import { productsActions } from "../store/products-slice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.itemList);
  const productsPerRow = useSelector((state) => state.products.itemsPerRow);
  console.log(productsPerRow);
  const display = _.chunk(products, productsPerRow);
  console.log(display);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productsActions.setItemsPerRow(3));
  });
  return (
    <div>
      <ProductList display={display} />
    </div>
  );
};

export default Products;

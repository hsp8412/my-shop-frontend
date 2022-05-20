import { getProductById, getProducts } from "../service/productsService";
import { productsActions } from "./products-slice";

export const fetchProducts = () => {
  return (dispatch) => {
    const fetchHandler = () => {
      const data = getProducts();
      return data;
    };
    try {
      const products = fetchHandler();
      dispatch(productsActions.setProducts(products));
    } catch (err) {}
  };
};

export const fetchProduct = (id) => {
  console.log(id);
  return (dispatch) => {
    const fetchHandler = () => {
      const data = getProductById(id);
      return data;
    };
    try {
      const product = fetchHandler();
      dispatch(productsActions.setProductToDisplay(product));
    } catch (err) {}
  };
};

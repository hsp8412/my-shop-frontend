import { getProducts } from "../service/productsService";
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

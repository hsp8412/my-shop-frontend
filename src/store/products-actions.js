import { getProductById, getProducts } from "../service/productsService";
import { productsActions } from "./products-slice";

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const data = await getProducts();
      return data;
    };
    try {
      const products = await fetchHandler();
      dispatch(productsActions.setProducts(products));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchProduct = (id) => {
  console.log(id);
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await getProductById(id);
      return res;
    };
    try {
      const product = await fetchHandler();
      dispatch(productsActions.setProductToDisplay(product));
    } catch (err) {
      console.log(err)
    }
  };
};

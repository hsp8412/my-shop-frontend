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

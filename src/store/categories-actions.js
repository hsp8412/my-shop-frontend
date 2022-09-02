import { getUserOrder } from "../service/orderService";
import { ordersActions } from "./orders-slice";
import { getCategories } from "../service/categoryService";
import { categoriesActions } from "./categories-slice";

export const fetchCategories = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const data = await getCategories();
      return data;
    };
    try {
      const categories = await fetchHandler();
      dispatch(categoriesActions.setCategories(categories));
    } catch (err) {
      console.log(err);
    }
  };
};

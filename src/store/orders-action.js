import { getUserOrder } from "../service/orderService";
import { ordersActions } from "./orders-slice";

export const fetchOrders = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const data = await getUserOrder();
      return data;
    };
    try {
      const orders = await fetchHandler();
      dispatch(ordersActions.setOrders(orders));
    } catch (err) {
      console.log(err);
    }
  };
};

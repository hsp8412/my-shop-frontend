import { getOrdersByUserId } from "../service/orderService";
import { ordersActions } from "./orders-slice";

export const fetchOrders = () => {
  return (dispatch) => {
    const fetchHandler = () => {
      const data = getOrdersByUserId(1);
      return data;
    };
    try {
      const orders = fetchHandler();
      dispatch(ordersActions.setOrders(orders));
    } catch (err) {}
  };
};

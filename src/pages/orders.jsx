import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/orders-action";
import OrderList from "../components/orders/orderList";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orderList);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <OrderList orders={orders} />
    </div>
  );
};

export default Orders;

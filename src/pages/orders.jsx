import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/orders-action";
import OrderList from "../components/orders/orderList";
import EmptyOrderList from "../components/orders/emptyOrderList";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orderList);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  console.log(orders);

  if (orders.length === 0) {
    return <EmptyOrderList />;
  }

  return (
    <div>
      <OrderList orders={orders} />
    </div>
  );
};

export default Orders;

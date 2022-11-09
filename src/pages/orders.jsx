import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/orders-action";
import OrderList from "../components/orders/orderList";
import EmptyOrderList from "../components/orders/emptyOrderList";
import MySpinner from "../components/myspinner";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orderList);
  const loading = useSelector((state) => state.orders.loading);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (orders.length === 0) {
    return <EmptyOrderList />;
  }

  return loading === "pending" ? (
    <div className="mt-5 d-flex flex-column align-items-center">
      <MySpinner />
    </div>
  ) : (
    <div>
      <OrderList orders={orders} />
    </div>
  );
};

export default Orders;

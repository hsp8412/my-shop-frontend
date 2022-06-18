import React from "react";
import { useSelector } from "react-redux";
import OrderCard from "./orderCard";

const OrderList = ({ orders }) => {
  return (
    <div className="container d-flex flex-column mt-3">
      {orders.map((order) => (
        <OrderCard key={order.uuid} order={order} />
      ))}
    </div>
  );
};

export default OrderList;

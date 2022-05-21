import React, { useEffect } from "react";
import dayjs from "dayjs";
import "../../css/orders.css";

const OrderCard = ({ order }) => {
  const calculateTotal = () => {
    let total = 0;
    order.orderDetail.forEach((item) => {
      total += item.price * item.quantity;
    });
    return (Math.round(total * 100) / 100).toFixed(2);
  };

  const renderStatus = () => {
    if (!order.isFulfilled) {
      if (order.isConfirmed)
        return <p className="order-text">Status: Confirmed</p>;
      return <p className="order-text">Status: Submitted</p>;
    }
    return <p className="order-text">Status: Shipped</p>;
  };

  const renderDate = () => {
    return (
      <p className="text-muted">
        Date created: {dayjs(order.timeCreated).format("YYYY-MM-DD HH:mm:ss")}{" "}
      </p>
    );
  };

  return (
    <div className="container mt-3">
      <div className="card mb-3 d-flex flex-column justify-content-center">
        <div className="container mt-3">
          <h4 className="order-text">Products: </h4>
          {order.orderDetail.map((product) => (
            <p className="order-text">
              {product.name} X {product.quantity}
            </p>
          ))}
          {renderStatus()}
          <h4 className="order-text">Total: ${calculateTotal()}</h4>
          {renderDate()}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

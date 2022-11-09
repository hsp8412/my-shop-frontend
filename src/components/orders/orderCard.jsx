import React, { useEffect } from "react";
import dayjs from "dayjs";
import "../../css/orders.css";
import { Button } from "react-bootstrap";
import { payForOrder } from "../../service/orderService";

const OrderCard = ({ order }) => {
  const calculateTotal = () => {
    let total = 0;
    order.products.forEach((item) => {
      total += item.price * item.quantity;
    });
    return (Math.round(total * 100) / 100).toFixed(2);
  };

  const renderDate = () => {
    return (
      <p className="text-muted">
        Date created: {dayjs(order.createdAt).format("YYYY-MM-DD HH:mm:ss")}{" "}
      </p>
    );
  };

  return (
    <div className="container mt-3">
      <div className="card mb-3 d-flex flex-column justify-content-center">
        <div className="container mt-3">
          <h4 className="order-text">Products: </h4>
          {order.products.map((product) => (
            <p className="order-text" key={product.uuid}>
              {product.name} X {product.quantity}
            </p>
          ))}
          Status: {order.status}
          <h4 className="order-text mt-3">Total: ${calculateTotal()}</h4>
          {renderDate()}
        </div>
        {order.status === "pending" ? (
          <div className="d-flex justify-content-start align-content-center mx-3 mb-3">
            <Button variant="primary" onClick={() => payForOrder(order)}>
              Make a payment
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OrderCard;

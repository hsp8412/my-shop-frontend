import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/orders-action";
import OrderList from "../components/orders/orderList";
import { getProductById } from "../service/productsService";
import { ordersActions } from "../store/orders-slice";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orderList);
  const ordersToDisplay = useSelector((state) => state.orders.ordersToDisplay);
  useEffect(() => {
    dispatch(fetchOrders());
    let ordersToDisplay = [];
    orders.forEach((order) => {
      let orderDetail = [];
      order.products.forEach((product) => {
        const data = getProductById(product.productId);
        let productDetail = { ...data };
        productDetail.quantity = product.quantity;
        orderDetail.push(productDetail);
      });
      const newOrder = { ...order, orderDetail: orderDetail };
      ordersToDisplay.push(newOrder);
    });
    console.log(ordersToDisplay);
    dispatch(ordersActions.setOrdersToDisplay(ordersToDisplay));
  }, [dispatch]);

  return (
    <div>
      <OrderList orders={ordersToDisplay} />
    </div>
  );
};

export default Orders;

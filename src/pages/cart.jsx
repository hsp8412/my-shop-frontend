import React from "react";
import ItemList from "../components/cart/itemList";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/emptyCart";
import MySpinner from "../components/myspinner";

const Cart = () => {
  const items = useSelector((state) => state.cart.itemList);
  const loading = useSelector((state) => state.cart.loading);
  return loading === "pending" ? (
    <div className="mt-5 d-flex flex-column align-items-center">
      <MySpinner />
    </div>
  ) : (
    <div>
      {items.length === 0 ? <EmptyCart /> : <ItemList items={items} />}{" "}
    </div>
  );
};

export default Cart;

import React from "react";
import ItemList from "../components/cart/itemList";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/emptyCart";

const Cart = () => {
  const items = useSelector((state) => state.cart.itemList);
  return (
    <div>
      {items.length === 0 ? <EmptyCart /> : <ItemList items={items} />}{" "}
    </div>
  );
};

export default Cart;

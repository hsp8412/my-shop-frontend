import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./itemCard";
import CheckoutCard from "./checkoutCard";

const ItemList = ({ items }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex flex-column justify-content-center">
            {items.map((item) => (
              <ItemCard item={item} items={items} />
            ))}
          </div>
          <div className="col-md-4">
            <CheckoutCard items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;

import React from "react";
import { addToCart, removeFromCart } from "../../store/cart-action";
import { useDispatch } from "react-redux";

const ItemCard = ({ item, items }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-3 mt-4">
      <div className="row g-0">
        <div className="col-md-3 d-flex justify-content-center">
          <img src={item.imgUrl} className="img-fluid" alt="item-img" />
        </div>
        <div className="col-md-9">
          <div className="card-body d-flex align-items-start flex-column">
            <h5 className="card-title mt-md-3">{item.name}</h5>
            <h5 className="card-text mt-md-3">${item.price}</h5>
            <div className="d-flex mt-md-3">
              <button
                type="button"
                className="btn btn-warning me-2"
                onClick={() => dispatch(addToCart(items, item))}
              >
                +
              </button>
              <h5 className="card-text my-auto">{item.quantity}</h5>
              <button
                type="button"
                className="btn btn-warning ms-2"
                onClick={() => dispatch(removeFromCart(items, item))}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

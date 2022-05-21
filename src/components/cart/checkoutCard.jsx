import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CheckoutCard = ({ items }) => {
  const dispatch = useDispatch();
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Total: {calculateTotal()}</h5>
        <a href="#" className="card-link">
          <button type="button" className="btn btn-primary">
            Place the order
          </button>
        </a>
        <a href="#" className="card-link">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(cartActions.removeAll())}
          >
            Remove all
          </button>
        </a>
      </div>
    </div>
  );
};

export default CheckoutCard;

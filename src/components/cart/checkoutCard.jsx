import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { toast } from "react-toastify";
import _ from "lodash";
import {submitOrder} from "../../service/orderService";

const CheckoutCard = ({ items }) => {
  const dispatch = useDispatch();
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return (Math.round(total * 100) / 100).toFixed(2);
  };
  const handleOrderSubmit = async (dispatch) => {
    let orderItems = [];
    for (let item of items) {
      let orderItem = _.pick(item, ['uuid', 'quantity']);
      orderItems.push(orderItem);
    }
    await submitOrder(orderItems);
    dispatch(cartActions.removeAll());
  }

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Total: {calculateTotal()}</h5>
          <button type="button" onClick={()=>handleOrderSubmit(dispatch)} className="btn btn-primary mx-2">
            Place the order
          </button>
        <a href="#" className="card-link">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              dispatch(cartActions.removeAll());
              toast.success("All items in the cart have been removed.");
            }}
          >
            Remove all
          </button>
        </a>
      </div>
    </div>
  );
};

export default CheckoutCard;

import React from "react";
import { useDispatch } from "react-redux";
import { pageActions } from "../../store/page-slice";

const EmptyCart = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mt-3">
      <div
        className="card mb-3 d-flex flex-column justify-content-center"
        style={{ height: "15rem" }}
      >
        <h1 className="align-self-center mb-4">Your shopping cart is empty.</h1>
        <a href="/" className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(pageActions.changePage("Products"))}
          >
            Go shopping
          </button>
        </a>
      </div>
    </div>
  );
};

export default EmptyCart;

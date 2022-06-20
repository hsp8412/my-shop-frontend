import React from "react";
import { useDispatch } from "react-redux";
import { pageActions } from "../../store/page-slice";

const EmptyOrderList = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mt-3">
      <div
        className="card mb-3 d-flex flex-column justify-content-center"
        style={{ height: "15rem" }}
      >
        <h1 className="align-self-center mb-4">
          There is no order to display.
        </h1>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              window.location = "/";
              dispatch(pageActions.changePage("Products"));
            }}
          >
            Go shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyOrderList;

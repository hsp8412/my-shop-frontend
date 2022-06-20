import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart-action";
import { toast } from "react-toastify";
import { pageActions } from "../../store/page-slice";

const ProductCard = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.itemList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div
      className="card d-flex flex-column"
      style={{ width: "18rem", height: "26rem" }}
    >
      <div style={{ height: "23rem" }} className="d-flex flex-column">
        <img
          src={product.imgUrl}
          className="card-img-top my-auto"
          alt="productImage"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <div className="mt-auto">
          <a href={`/product/${product.uuid}`}>
            <h5 className="card-title">{product.name}</h5>
          </a>
          <h5 className="card-title">${product.price}</h5>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (isLoggedIn) {
                dispatch(addToCart(cartItems, product));
                toast.success("Item has been added to your cart successfully.");
              } else {
                dispatch(pageActions.setShowLoginPrompt(true));
              }
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

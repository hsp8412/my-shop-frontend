import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart-action";
import { toast } from "react-toastify";

const ProductDetailCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemList);
  const product = useSelector((state) => state.products.productToDisplay);
  if (product === null) {
    return <div />;
  }
  return (
    <Container>
      <div className="card mb-3 mt-4">
        <div className="row g-0">
          <div className="col-md-4 col-sm-12 d-flex justify-content-center">
            <img
              src={product.imgUrl}
              className="img-fluid rounded-start"
              style={{ maxHeight: "20rem" }}
              alt="Product image"
            />
          </div>
          <div className="col-md-8 col col-sm-12">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h5 className="card-text">${product.price}</h5>
              <p className="card-text">{product.description}</p>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    dispatch(addToCart(cartItems, product));
                    toast.success(
                      "Item has been added to your cart successfully."
                    );
                  }}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-3"
                  onClick={() => {
                    window.location = "/";
                  }}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailCard;

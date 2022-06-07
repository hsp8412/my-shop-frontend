import { cartActions } from "./cart-slice";

export const addToCart = (cartItems, product) => {
  const item = cartItems.find((item) => item.id === product.id);
  console.log(item);
  if (!item) {
    return (dispatch) => {
      const newItem = { ...product, quantity: 1 };
      dispatch(cartActions.addNewItem(newItem));
    };
  } else {
    return (dispatch) => {
      dispatch(cartActions.increaseQuantity(product));
    };
  }
};

export const removeFromCart = (cartItems, itemToRemove) => {
  const item = cartItems.find((item) => item.id === itemToRemove.id);
  if (item.quantity === 1) {
    return (dispatch) => {
      dispatch(cartActions.removeItem(itemToRemove));
    };
  }
  return (dispatch) => {
    dispatch(cartActions.decreaseQuantity(itemToRemove));
  };
};

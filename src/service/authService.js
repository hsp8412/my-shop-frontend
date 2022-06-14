import http from "./httpService";
import jwt_decode from "jwt-decode";
import { getUserInfo } from "./userService";
import { authActions } from "../store/auth-slice";
import { getCart } from "./cartService";
import { getProductById } from "./productsService";
import { cartActions } from "../store/cart-slice";
const accessTokenKey = "token";

const apiUrl = process.env.REACT_APP_URL_BASE;
const authApiEndpoint = apiUrl + "/auth";
const userApiEndpoint = apiUrl + "/user";
const cartApiEndpoint = apiUrl + "/cart";

export async function login(email, password, dispatch) {
  const res = await http.post(authApiEndpoint, {
    email,
    password,
  });
  const { accessToken } = res.data;
  localStorage.setItem(accessTokenKey, accessToken);
  const userInfo = await getUserInfo();
  dispatch(authActions.login(userInfo));
  const cart = await getCart();
  let cartItems = [];
  let items = [...cart.products];
  for (let item of items) {
    const product = await getProductById(item.uuid);
    const quantity = item.cart_product.quantity;
    const cartItem = { ...product, quantity };
    cartItems.push(cartItem);
  }
  dispatch(cartActions.setCart(cartItems));
}

export async function register(user) {
  await http.post(userApiEndpoint, user);
}

export function getAccessJwt() {
  return localStorage.getItem(accessTokenKey);
}

export function logout(dispatch) {
  localStorage.removeItem(accessTokenKey);
  dispatch(authActions.logout());
  dispatch(cartActions.removeAll());
}

export function getCurrentUser() {
  try {
    const token = getAccessJwt();
    return jwt_decode(token);
  } catch (ex) {
    return null;
  }
}

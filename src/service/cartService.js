import http from "./httpService";
const apiUrl = process.env.REACT_APP_URL_BASE;
const cartApiEndpoint = apiUrl + "/cart";

export async function getCart() {
  const cart = await http.get(cartApiEndpoint);
  return cart.data;
}

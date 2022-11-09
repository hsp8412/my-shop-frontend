import http from "./httpService";
import { getProductById } from "./productsService";
import { toast } from "react-toastify";
import _ from "lodash";
const apiUrl = process.env.REACT_APP_URL_BASE;
const orderApiEndpoint = apiUrl + "/order";

export async function submitOrder(items) {
  let res = await http.post(orderApiEndpoint, { items });
  const orderId = res.data.uuid;
  res = await http.post(`${orderApiEndpoint}/create-checkout-session`, {
    items,
    orderId,
  });
  if (res.status === 200) {
    window.location = res.data.url;
  } else {
    toast.error("Payment failed.");
  }
}

export async function payForOrder(order) {
  let items = [];
  for (let product of order.products) {
    const item = _.pick(product, ["uuid", "quantity"]);
    items.push(item);
  }
  const res = await http.post(`${orderApiEndpoint}/create-checkout-session`, {
    items,
    orderId: order.uuid,
  });
  if (res.status === 200) {
    window.location = res.data.url;
  } else {
    toast.error("Payment failed.");
  }
}

export async function getUserOrder() {
  const res = await http.get(`${orderApiEndpoint}/user`);
  let orders = res.data;
  for (let order of orders) {
    let items = [];
    for (let product of order.products) {
      let item = await getProductById(product.uuid);
      item.quantity = product.order_product.quantity;
      items.push(item);
    }
    order.products = items;
  }
  return orders;
}

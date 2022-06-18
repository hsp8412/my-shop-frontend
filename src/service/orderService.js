// const orders = [
//   {
//     id: 1,
//     userId: 1,
//     products: [
//       { productId: 1, quantity: 2 },
//       { productId: 2, quantity: 3 },
//       { productId: 4, quantity: 1 },
//     ],
//     timeCreated: new Date(2022, 4, 24, 10, 33, 30, 0),
//     isConfirmed: true,
//     isFulfilled: true,
//   },
//   {
//     id: 2,
//     userId: 1,
//     products: [
//       { productId: 2, quantity: 2 },
//       { productId: 5, quantity: 3 },
//     ],
//     timeCreated: new Date(2022, 4, 25, 15, 20, 0, 0),
//     isConfirmed: true,
//     isFulfilled: false,
//   },
//   {
//     id: 3,
//     userId: 2,
//     products: [{ productId: 4, quantity: 1 }],
//     timeCreated: new Date(2022, 4, 26, 10, 33, 30, 0),
//     isConfirmed: false,
//     isFulfilled: false,
//   },
// ];

import http from "./httpService";
import {getProductById} from "./productsService";
const apiUrl = process.env.REACT_APP_URL_BASE;
const orderApiEndpoint = apiUrl + "/order";

export async function submitOrder(items) {
  await http.post(orderApiEndpoint, {items});
}

export async function getUserOrder() {
  const res = await http.get(`${orderApiEndpoint}/user`);
  let orders = res.data;
  for(let order of orders){
    let items = [];
    for(let product of order.products){
      let item = await getProductById(product.uuid);
      item.quantity = product.order_product.quantity;
      items.push(item);
    }
    order.products = items;
  }
  return orders;
}

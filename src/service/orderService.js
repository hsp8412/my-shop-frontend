const orders = [
  {
    id: 1,
    userId: 1,
    products: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 3 },
      { productId: 4, quantity: 1 },
    ],
    timeCreated: new Date(2022, 4, 24, 10, 33, 30, 0),
    isFulfilled: true,
  },
  {
    id: 2,
    userId: 1,
    products: [
      { productId: 2, quantity: 2 },
      { productId: 5, quantity: 3 },
    ],
    timeCreated: new Date(2022, 4, 25, 15, 20, 0, 0),
    isFulfilled: false,
  },
  {
    id: 3,
    userId: 2,
    products: [{ productId: 4, quantity: 1 }],
    timeCreated: new Date(2022, 4, 26, 10, 33, 30, 0),
    isFulfilled: true,
  },
];

export function getOrdersByUserId(id) {
  return orders.filter((order) => (order.userId = id));
}

export function getOrderById(id) {
  return orders.filter((order) => (order.id = id));
}

const products = [
  {
    id: 1,
    name: "Macbook Air 2021",
    price: 1000,
    CategoryId: 1,
    imgUrl: "/product-img.jpeg",
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    price: 20,
    CategoryId: 2,
    imgUrl: "/product-img.jpeg",
  },
  {
    id: 3,
    name: "Microsoft Surface Pro 8",
    price: 1199,
    CategoryId: 1,
    imgUrl: "/product-img.jpeg",
  },
  {
    id: 4,
    name: "Microsoft Surface Pro 8",
    price: 1199,
    CategoryId: 1,
    imgUrl: "/product-img.jpeg",
  },
  {
    id: 5,
    name: "The Fundamental Pocket T-Shirt\n",
    price: 74,
    CategoryId: 1,
    imgUrl: "/product-img.jpeg",
  },
];

export function getProducts() {
  return products;
}

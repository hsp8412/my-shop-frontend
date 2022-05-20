const products = [
  {
    id: 1,
    name: "Macbook Air 2021",
    price: 1000,
    CategoryId: 1,
    imgUrl: "/product-img.jpeg",
    description:
      "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. An advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.",
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    price: 20,
    CategoryId: 2,
    imgUrl: "/product-img.jpeg",
    description:
      "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
  },
  {
    id: 3,
    name: "Microsoft Surface Pro 8",
    price: 1199,
    CategoryId: 1,
    imgUrl: "/product-img.jpeg",
    description:
      'Surface Pro 8 combines the power of a laptop with the flexibility of a tablet, and every angle in between, with the iconic Kickstand and larger 13" touchscreen.',
  },
  {
    id: 4,
    name: "A Tale of Two Cities",
    price: 22,
    CategoryId: 2,
    imgUrl: "/product-img.jpeg",
    description:
      "A Tale of Two Cities is an 1859 historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris, and his release to live in London with his daughter Lucie whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror. In the Introduction to the Encyclopedia of Adventure Fiction, critic Don D'Ammassa argues that it is an adventure novel because the protagonists are in constant danger of being imprisoned or killed.",
  },
  {
    id: 5,
    name: "The Fundamental Pocket T-Shirt",
    price: 74,
    CategoryId: 1,
    imgUrl: "/product-img.jpeg",
    description:
      "This wardrobe staple blends cottony soft fabric with our abrasion-resistant and anti-stink technologies for a classic tee that'll last",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  const data = products.find((product) => product.id == id);
  return data;
}

export type Product = {
  id: string;
  category: "MEN" | "WOMEN" | "KIDS";
  type: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  tag: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    category: "MEN",
    type: "Cotton T Shirt",
    name: "Basic Heavy Weight T-shirt",
    price: 1999,
    image: "/figmaAssets/rectangle-12.png",
    images: ["/figmaAssets/rectangle-12.png", "/figmaAssets/rectangle-13.png"],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
    colors: ["#000000", "#FFFFFF", "#8B7355"],
    tag: "T-Shirts",
    description:
      "Relaxed-fit heavyweight t-shirt made from 100% premium cotton. Features a classic crewneck and short sleeves.",
  },
  {
    id: "2",
    category: "MEN",
    type: "Cotton Jeans",
    name: "Soft Wash Straight Fit Jeans",
    price: 1999,
    image: "/figmaAssets/rectangle-13.png",
    images: ["/figmaAssets/rectangle-13.png", "/figmaAssets/rectangle-12.png"],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
    colors: ["#1A1A2E", "#4A4A4A", "#8B7355"],
    tag: "Jeans",
    description:
      "Straight-fit jeans with a soft wash finish. Made from a cotton blend for all-day comfort.",
  },
  {
    id: "3",
    category: "MEN",
    type: "Cotton T Shirt",
    name: "Basic Heavy Weight T-shirt",
    price: 1999,
    image: "/figmaAssets/rectangle-12.png",
    images: ["/figmaAssets/rectangle-12.png", "/figmaAssets/rectangle-13.png"],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
    colors: ["#000000", "#FFFFFF"],
    tag: "New",
    description:
      "A wardrobe essential. This heavyweight tee is crafted for lasting wear and timeless style.",
  },
  {
    id: "4",
    category: "WOMEN",
    type: "Cotton T Shirt",
    name: "V-Neck T-Shirt",
    price: 999,
    image: "/figmaAssets/rectangle-13.png",
    images: ["/figmaAssets/rectangle-13.png", "/figmaAssets/rectangle-12.png"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#FFFFFF", "#000000", "#D4B896"],
    tag: "T-Shirts",
    description:
      "Classic v-neck t-shirt in lightweight cotton. Perfect for layering or wearing alone.",
  },
  {
    id: "5",
    category: "WOMEN",
    type: "Cotton T Shirt",
    name: "Crewneck T-Shirt",
    price: 999,
    image: "/figmaAssets/rectangle-12.png",
    images: ["/figmaAssets/rectangle-12.png", "/figmaAssets/rectangle-13.png"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#FFFFFF", "#C4A882"],
    tag: "Best Sellers",
    description:
      "A best-selling crewneck tee with a relaxed fit. Made from soft, breathable cotton.",
  },
  {
    id: "6",
    category: "MEN",
    type: "Shirt",
    name: "Embroidered Seersucker Shirt",
    price: 999,
    image: "/figmaAssets/rectangle-13.png",
    images: ["/figmaAssets/rectangle-13.png", "/figmaAssets/rectangle-12.png"],
    sizes: ["S", "M", "L", "XL", "2X"],
    colors: ["#FFFFFF", "#B0C4DE"],
    tag: "Shirts",
    description:
      "Relaxed-fit shirt in textured seersucker fabric with embroidered detail. Camp collar and short sleeves.",
  },
  {
    id: "7",
    category: "MEN",
    type: "Cotton T Shirt",
    name: "Basic Slim Fit T-Shirt",
    price: 1999,
    image: "/figmaAssets/rectangle-12.png",
    images: ["/figmaAssets/rectangle-12.png", "/figmaAssets/rectangle-13.png"],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
    colors: ["#000000", "#FFFFFF", "#808080"],
    tag: "New",
    description:
      "Slim-fit t-shirt in smooth cotton jersey. A versatile piece for everyday styling.",
  },
  {
    id: "8",
    category: "WOMEN",
    type: "Cotton T Shirt",
    name: "Blurred Print T-Shirt",
    price: 999,
    image: "/figmaAssets/rectangle-13.png",
    images: ["/figmaAssets/rectangle-13.png", "/figmaAssets/rectangle-12.png"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["#F5F5DC", "#000000"],
    tag: "New",
    description:
      "Oversized t-shirt with an artistic blurred print graphic. Made from 100% organic cotton.",
  },
  {
    id: "9",
    category: "MEN",
    type: "Jacket",
    name: "Full Sleeve Zipper",
    price: 1999,
    image: "/figmaAssets/rectangle-12.png",
    images: ["/figmaAssets/rectangle-12.png", "/figmaAssets/rectangle-13.png"],
    sizes: ["S", "M", "L", "XL", "2X"],
    colors: ["#000000", "#1A1A2E", "#4A4A4A"],
    tag: "Jackets",
    description:
      "Full-zip jacket with a clean, minimal design. Features side pockets and a comfortable lining.",
  },
  {
    id: "10",
    category: "KIDS",
    type: "Cotton T Shirt",
    name: "Henley T-Shirt",
    price: 999,
    image: "/figmaAssets/rectangle-13.png",
    images: ["/figmaAssets/rectangle-13.png", "/figmaAssets/rectangle-12.png"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["#FFFFFF", "#87CEEB", "#98FB98"],
    tag: "T-Shirts",
    description:
      "Comfortable henley-style t-shirt for kids. Soft cotton blend with button placket detail.",
  },
  {
    id: "11",
    category: "KIDS",
    type: "Cotton T Shirt",
    name: "Basic Slim Fit T-Shirt",
    price: 999,
    image: "/figmaAssets/rectangle-12.png",
    images: ["/figmaAssets/rectangle-12.png", "/figmaAssets/rectangle-13.png"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["#000000", "#FFFFFF"],
    tag: "Best Sellers",
    description:
      "A kids' essential. Slim-fit t-shirt in pure cotton, easy to wear and easy to wash.",
  },
  {
    id: "12",
    category: "WOMEN",
    type: "Jacket",
    name: "Full Sleeve Zipper",
    price: 1999,
    image: "/figmaAssets/rectangle-13.png",
    images: ["/figmaAssets/rectangle-13.png", "/figmaAssets/rectangle-12.png"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#8B7355"],
    tag: "Jackets",
    description:
      "Women's full-zip jacket with a tailored silhouette. Lightweight and versatile for layering.",
  },
];

export const CATEGORIES = ["MEN", "WOMEN", "KIDS"] as const;

export const PRODUCT_TAGS = [
  "New",
  "Best Sellers",
  "T-Shirts",
  "Jeans",
  "Jackets",
  "Coats",
  "Shirts",
  "Polo Shirts",
  "Shorts",
  "Suits",
];

export const SIZES = ["XS", "S", "M", "L", "XL", "2X"];

import Products from "./components/pages/shop/products";
import { ProductsProps, Tab } from "./types/interface";

export const carouselBrakepoints = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 2.5,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 650,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 650,
    },
    items: 1.2,
    partialVisibilityGutter: 30,
  },
};

export const tabProps: Tab[] = [
  { key: 1, label: "All Products", children: <Products /> },
  {
    key: 2,
    label: "Appetisers and Soups",
    children: <div>Appetisers and Soups</div>,
  },
  { key: 3, label: "Handmade Pasta", children: <div>Handmade Pasta</div> },
  { key: 4, label: "Pasta Sauces", children: <div>Pasta Sauces</div> },
  { key: 5, label: "Vegetarian", children: <div>Vegetarian</div> },
  { key: 6, label: "Meats", children: <div>Meats</div> },
  { key: 7, label: "Bundle Deals", children: <div>Bundle Deals</div> },
  { key: 8, label: "Desserts", children: <div>Desserts</div> },
  { key: 9, label: "Cheeses", children: <div>Cheeses</div> },
  { key: 10, label: "Condiments", children: <div>Condiments</div> },
];

export const products: ProductsProps[] = [
  {
    key: 1,
    img: "assets/product1.png",
    title: "Pietrasanta Croutons (60g)",
    description:
      "Description of the item will be displayed over here. Optional",
    price: "S$1.95",
    badge: "sale",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 2,
    img: "assets/product2.png",
    title: "Stew Beef Tripe (300g)",
    description:
      "Description of the item will be displayed over here. Optional",
    price: "S$9.30",
    badge: "few stocks left",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 3,
    img: "assets/product3.png",
    title: "Burrata",
    description: `Burrata is a type of Italian cheese made from mozzarella and cream.
    It has a soft, creamy center and a firm outer shell. It is often
    served fresh and is popular in salads or as a topping for pizza or
    pasta dishes. Burrata is a type of Italian cheese made from
    mozzarella and cream. It has a soft, creamy center and a firm outer
    shell. It is often served fresh and is popular in salads or as a
    topping for pizza or pasta dishes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla convallis egestas rhoncus. Donec facilisis velit eu est pharetra laoreet. Nulla facilisi. Ut nec metus augue. Vivamus suscipit nisi sit amet neque consequat, non vehicula lectus dapibus.<br/><br/>
    Nam vestibulum, libero ut vehicula dapibus, odio tortor luctus orci, vel elementum ipsum erat non risus. Etiam ac diam risus. Sed vehicula, mauris nec suscipit lacinia, felis justo fermentum nisl, at scelerisque turpis lacus a libero. Phasellus blandit dui sed diam faucibus, sit amet tempus mi egestas. Integer egestas turpis sed arcu facilisis, eget accumsan nisi aliquet.<br/><br/>
    Aenean eget leo metus. Quisque vel nunc sit amet velit dictum ultrices ut non ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vestibulum nulla sit amet volutpat ultricies. Nulla facilisi. Cras sollicitudin magna ut turpis convallis, vel euismod nulla condimentum. Proin auctor, erat ac dictum accumsan, sapien erat bibendum arcu, et suscipit libero risus id risus.<br/><br/>
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vitae orci in lacus venenatis dignissim vel in quam. Aliquam erat volutpat. Fusce tristique nunc vel risus faucibus, at molestie nulla luctus. Sed porttitor eros nec mi aliquet, sit amet malesuada massa consectetur. Praesent id mauris vehicula, feugiat leo et, aliquet nulla.`,
    price: "S$10.00 - 19.50",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 4,
    img: "assets/product4.png",
    title: "Chilled Pork Chianti (300g)",
    description:
      "Description of the item will be displayed over here. Optional",
    price: "S$14.00",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 5,
    img: "assets/product5.png",
    title: "Porchetta, Chilled (80g)",
    description:
      "Description of the item will be displayed over here. Optional",
    price: "S$9.70",
    badge: "sale",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 6,
    img: "assets/product6.png",
    title: "Rocket Leaves",
    description: "3 available sizes: 100g, 500g or 1kg",
    price: "S$6.85",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 7,
    img: "assets/product7.png",
    title: "Parma Ham, Chilled (80g)",
    description:
      "Description of the item will be displayed over here. Optional",
    price: "S$9.70",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 8,
    img: "assets/product8.png",
    title: "San Marzano Tomatoes On Vine (4kg)",
    description: "4 kilograms on tray. 3 days advance order required.",
    price: "S$108.80",
    badge: "sale",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 9,
    img: "assets/product9.png",
    title: "San Marzano Tomatoes On Vine (1kg)",
    description:
      "Description of the item will be displayed over here. Optional",
    price: "S$30.60",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
  {
    key: 10,
    img: "assets/product10.png",
    title: "San Marzano Tomatoes Washed (250g)",
    description:
      "Description of the item will be displayed over here. Optional",
    price: "S$8.80",
    badge: "sale",
    variation: [
      { value: "100g", label: "100g" },
      { value: "300g", label: "300g" },
    ],
    addOns: [
      { value: "none", label: "None" },
      { value: "olive", label: "Extra Virgin Olive Oil (50g) [+ S$2.00]" },
      { value: "tomatoes", label: "San Marzano Tomatoes (100g) [+ S$2.00]" },
    ],
  },
];

/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // laptops
  {
    id: "C1P1",
    name: 'MacBook Pro 16"',
    description: "Fastest and most reliable Laptop",
    price: 299999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "C1P2",
    name: "Dell xps 13 - developer edition",
    description: "Most compact and light-weight laptop",
    price: 159999,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "C1P3",
    name: "HP dev one ",
    description: "Most powerfull linux laptop for programmers ",
    price: 109999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "C1P4",
    name: "XPS 13 Plus ",
    description: "Most compact and light-weight laptop",
    price: 224999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "C1P5",
    name: "Lenovo ThinkPad X1 Carbon ",
    description: "Most durable & premium laptop",
    price: 277450,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "C1P5",
    name: "Acer Aspire 5",
    description: "Most Affordable laptop for programming",
    price: 59900,
    discontinued: false,
    categories: ["c1"]
  },

  // phones
  {
    id: "C2P1",
    name: "iphone 14 pro",
    description: "Most powerful and latest IOS device for app testing ",
    price: 139999,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "C2P2",
    name: "Google Pixel 7 pro",
    description: "Most powerful and latest ANDROID device for app testing ",
    price: 117999,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "C2P3",
    name: "Purism Librem 5",
    description: "Most powerful and latest LINUX phone for app testing ",
    price: 80099,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "C2P4",
    name: "Google Pixel 6 a",
    description: "Most affordable ANDROID device for app testing ",
    price: 64999,
    discontinued: false,
    categories: ["c2"]
  },
  // keyboards
  {
    id: "C3P1",
    name: "Logitech MX MECHANICAL",
    description: "Best Overall low profile wireless mechanical keyboard",
    price: 21999,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "C3P2",
    name: "Keychron K10 Wireless Mechanical Keyboard",
    description: "Best Overall full size wireless mechanical keyboard",
    price: 8400,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "C3P3",
    name: "ZSA Moonlander Mk1",
    description: "Best Overall ergonomic split mechanical keyboard",
    price: 36500,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "C3P4",
    name: "System76 LAUNCH KEYBOARD",
    description: "Best wired tkl mechanical keyboard",
    price: 28500,
    discontinued: false,
    categories: ["c3"]
  },

  // Accessories
  {
    id: "C4P1",
    name: "LogiTech mx master 3s",
    description: "Best wireless mouse",
    price: 12900,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "C4P2",
    name: "Anker 643 usb-c to usb-c Cable",
    description: "Most durable usb c to usb c cable with upto 100w output",
    price: 1999,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "C4P3",
    name: '49" DQHD Monitor with 1000R Curved Display',
    description: "Best overall super-ultrawide monitor for programming",
    price: 129999,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "C4P4",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    description: "Best overall Wireless Noise Cancelling Headphones for programming",
    price: 56999,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "C4P5",
    name: "LogiTech mx master 2s",
    description: "Best wireless mouse",
    price: 12900,
    discontinued: true,
    categories: ["c4"]
  },
  {
    id: "C4P6",
    name: "Sony WH-1000XM3 Headphones",
    description: "Best overall Wireless Noise Cancelling Headphones for programming",
    price: 36999,
    discontinued: true,
    categories: ["c4"]
  },
  {
    id: "C4P7",
    name: "Anker USB C Hub 555",
    description: "Best overall Usb hub",
    price: 9999,
    discontinued: false,
    categories: ["c4"]
  }
];

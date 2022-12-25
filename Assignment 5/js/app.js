/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Harshil DineshBhai THakkar
 *      Student ID: 160431219
 *      Date:       26/11/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

function main() {
  // For debugging, display all of our data in the console
  // You can remove this once you start working...
  console.log({ products, categories }, "Store Data");
  Navbar();
  heading("c1");
  logProduct(null);
}

// Creates a dynamic nav bar based on the categories
function Navbar() {
  var Mainheader = document.querySelector("header");
  var navBar = document.getElementById("category-menu");
  for (var i = 0; i < categories.length; i++) {
    var Button = document.createElement("button");
    Button.id = categories[i].id;
    Button.setAttribute("onclick", "heading(id)");
    var cDescription = document.createTextNode(categories[i].description);
    Button.appendChild(cDescription);
    navBar.appendChild(Button);
  }
  Mainheader.appendChild(navBar);
}

// creates cards of a category passed as an arguement
function ItemsCards(category) {
  var productsDiv = document.getElementById("products");

  productsDiv.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category) && products[i].discontinued === false) {
      productsDiv.innerHTML += createProductCard(products[i]);
    }
  }
}

// Creates a dynamic heading based on passed category
function heading(category) {
  var heading = document.getElementById("category");
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].id === category) {
      heading.innerHTML = `${categories[i].description}`;
    }
  }
  ItemsCards(category);
}

// logs an object in the console
function logProduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      console.log(products[i]);
    }
  }
}
// creates  a product card for the passed product
function createProductCard(product) {
  var card = `<div id="${product.id}" class="card" onclick="logProduct('${product.id}');">`;
  var productImage = `<img src="${product.imageUrl}" class="card-image">`;
  var productDecsription = `<p>${product.description}</p>`;
  var productName = `<h3>${product.name}</h3>`;
  var productPrice = `<span>${new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(product.price / 100)}</span>`;
  card += productImage;
  card += productName;
  card += productDecsription;
  card += productPrice;
  card += "</div>";
  return card;
}

addEventListener("DOMContentLoaded", main);

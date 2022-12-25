/**
 * WEB222 – Assignment 04
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
 *      Date:       18/11/2022
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

// creates a table of a category passed as an arguement
function ItemsTable(category) {
  var table = document.getElementById("products");
  table.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category) && products[i].discontinued === false) {
      var tableRow = `<tr id="${products[i].id}" onclick="logProduct('${products[i].id}');">`;
      tableRow += `<td>${products[i].name}</td>`;
      tableRow += `<td>${products[i].description}</td>`;
      tableRow += `<td>${new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
      }).format(products[i].price / 100)}</td>`;
      tableRow += "</tr>";
      table.innerHTML += tableRow;
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
  ItemsTable(category);
}

// logs an object in the console
function logProduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      console.log(products[i]);
    }
  }
}
addEventListener("DOMContentLoaded", main);

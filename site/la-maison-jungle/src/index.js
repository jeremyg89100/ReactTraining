import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <Cart />
    <ShoppingList />
  </React.StrictMode>,
  document.getElementById("root"),
);

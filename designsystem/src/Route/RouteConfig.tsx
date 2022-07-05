import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import Cart from "../page/cart/Cart";
import ProductDetails from "../page/productDetails/ProductDetails";

export default function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-details" element={<ProductDetails />} />
    </Routes>
  );
}

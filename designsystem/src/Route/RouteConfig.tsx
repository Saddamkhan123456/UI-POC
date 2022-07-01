import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import Cart from "../page/cart/Cart";

export default function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

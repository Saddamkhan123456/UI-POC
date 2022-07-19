import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import Cart from "../page/cart/Cart";
import ProductDetails from "../page/productDetails/ProductDetails";
// import Settings from "../page/setting/settings";
import ProductCategoryPage from "../page/productCategoryPage/ProductCategoryPage";
import CategoryPage from "../page/category/categoryPage";

export default function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      {/* <Route path="/settings" element={<Settings />} /> */}
      <Route path="/product/category/:categoryId" element={<ProductCategoryPage />} /> 
      <Route path="/product/category" element={<CategoryPage />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import ProductDetails from "../page/productDetails/ProductDetails";
import ProductCategoryPage from "../page/productCategoryPage/ProductCategoryPage";
import ProductBrandPage from "../page/productBrandPage/ProductBrandPage";
import ShoppingCartPage from "../page/shoppingCartPage/ShoppingCartPage";

export default function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route
        path="/product/category/:categoryId"
        element={<ProductCategoryPage />}
      />
      <Route path="/product/brand/:brandId" element={<ProductBrandPage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
    </Routes>
  );
}

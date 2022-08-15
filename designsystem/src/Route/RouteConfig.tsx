import { Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import Cart from "../page/cart/Cart";
import ProductDetails from "../page/productDetails/ProductDetails";
import ProductCategoryPage from "../page/productCategoryPage/ProductCategoryPage";
import ProductBrandPage from "../page/productBrandPage/ProductBrandPage";
import ShoppingCartPage from "../page/shoppingCartPage/ShoppingCartPage";
import Wishlist from "../page/wishlist/wishlist";

export default function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route
        path="/product/category/:categoryId"
        element={<ProductCategoryPage />}
      />
      <Route path="/product/brand/:brandId" element={<ProductBrandPage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

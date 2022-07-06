import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import Cart from "../page/cart/Cart";
import ProductDetails from "../page/productDetails/ProductDetails";
import Settings from "../page/setting/settings";
import { allProducts } from "../api/api";



export default function RouteConfig() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    allProducts().then((response) => {
      setProducts(response["data"]);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/product/" element={<ProductDetails />} /> */}
      <Route path="/settings" element={<Settings />} />
      <Route
          path="/product/:productId"
          element={({ match }) => (
            <ProductDetails
              product={products.find(
                (product) => String(product.id) === match.params.id
              )}
            />
          )}
        />
    </Routes>
  );
}

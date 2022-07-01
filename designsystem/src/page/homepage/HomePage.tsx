import React, { useEffect } from "react";
import { allProducts } from "../../api/api";

const HomePage = () => {
  useEffect(() => {
    const result = allProducts();
    console.log(result);
  });
  return <div>homePage</div>;
};

export default HomePage;

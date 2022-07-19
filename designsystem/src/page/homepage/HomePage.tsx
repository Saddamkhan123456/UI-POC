import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../molecules/categoryCard";
import { categoryData, brandCategoryData } from '../../constants/constants'

const HomePage = () => {
  const categories = [{ title: "men" }, { title: "women" }, { title: "kids" }];

  return (
    <>
     
      <div className="flex flex-col p-3">
        <ul>
          {categories.map((categoryName, index) => (
            <li key={index}>
              <Link to={`/product/category/${categoryName.title}`}>
                {categoryName.title} Clothing
              </Link>
            </li>
          ))}
        </ul>
      </div>
       <div>
        <div className="mb-4">
          <CategoryCard
            category="category"
            CardPropsSets={categoryData}
            className="bg-theme-neutral"
          />
        </div>
        <div className="mb-4">
          <CategoryCard
            category="brand deals"
            CardPropsSets={brandCategoryData}
            className="bg-theme-neutral55"
          />
        </div>
      </div>
    
    </>
  );
};

export default HomePage;

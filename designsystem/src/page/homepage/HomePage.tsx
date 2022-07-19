import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../../atoms/card/card";

const HomePage = () => {
  const categories = [{ title: "men" }, { title: "women" }, { title: "kids" }];

  return (
    <>
      {/* <div>{a}</div> */}
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
      <div className="flex flex-col p-3">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <CardComponent />
        </div>
      </div>
    </>
  );
};

export default HomePage;

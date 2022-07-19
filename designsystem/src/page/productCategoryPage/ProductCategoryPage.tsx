import React, { useEffect, useState } from "react";
import { Banner } from "../../atoms/banner";
import { useParams } from "react-router-dom";
import { allProducts } from "../../api/api";
import { Card, Button } from "design-system";
import { Link } from "react-router-dom";
import { CardComponent } from "../../atoms/card";

const ProductCategoryPage = () => {
  let { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  // console.log(categoryId);
  useEffect(() => {
    allProducts().then((response) => {
      // console.log(response["data"]);
      setCategoryData(response["data"]);
    });
  }, []);

  return (
    <>
      <Banner pageHeading={categoryId} />

      <div className="flex flex-col px-6 lg:px-6 sm:px-3 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryData &&
            categoryData
              .filter((cardData) => cardData.categoryId === categoryId)
              .map((cardData: any) => {
                return (
                  <>
                    <CardComponent
                      id={cardData.id}
                      thumbnail={cardData.thumbnail}
                      title={cardData.title}
                      description={cardData.description}
                      category={cardData.category}
                      price={cardData.price}
                      brand={cardData.brand}
                      withBrand={true}
                    />
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default ProductCategoryPage;

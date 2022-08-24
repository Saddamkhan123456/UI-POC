import { useEffect, useState } from "react";
import { Banner } from "../../atoms/banner";
import { useParams } from "react-router-dom";
import { allProducts } from "../../api/api";
import { CardComponent } from "../../atoms/card";

const ProductCategoryPage = () => {
  let { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    allProducts().then((response) => {
      setCategoryData(response["data"]);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Banner pageHeading={categoryId} />
      <div className="flex flex-col p-3 container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryData &&
            categoryData
              .filter((cardData) => cardData.categoryId === categoryId)
              .map((cardData: any) => {
                return (
                  <>
                    <CardComponent CardData={cardData} />
                  </>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;

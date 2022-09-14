import { useEffect, useState } from "react";
import { Banner } from "../../atoms/banner";
import { useParams } from "react-router-dom";
import { allProducts } from "../../api/api";
import { CardComponent } from "../../atoms/card";

const ProductBrandPage = () => {
  let { brandId } = useParams();
  // console.log(brandId);
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    allProducts().then((response) => {
      console.log(response["data"]);
      setBrandData(response["data"]);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Banner pageHeading={brandId} />
      <div className="flex flex-col container my-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandData &&
            brandData
              .filter((cardData) => cardData.brand === brandId)
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

export default ProductBrandPage;

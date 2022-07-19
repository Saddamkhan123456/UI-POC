import React, { useEffect, useState } from "react";
import { Banner } from "../../atoms/banner";
import { useParams } from "react-router-dom";
import { allProducts } from "../../api/api";
import { Card, Button } from "design-system";
import { Link } from "react-router-dom";

const ProductCategoryPage = () => {
  let { categoryId } = useParams();
  const [demoData, setDemoData] = useState([]);
  console.log(categoryId);
  useEffect(() => {
    allProducts().then((response) => {
      // console.log(response["data"][0].id);
      setDemoData(response["data"]);
    });
  }, []);

  return (
    <>
      <Banner pageHeading={categoryId} />

      <div className="flex flex-col p-3 py-16">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {demoData &&
            demoData
              .filter((cardData) => cardData.categoryId === categoryId)
              .map((cardData: any) => {
                return (
                  <>
                    <Card>
                      <div className="bg-theme-neutral75 p-4 bg-no-repeat bg-center bg-cover rounded-t-md mr-2">
                        <Link to={`/product/${cardData.id}`}>
                          <img
                            src={cardData.thumbnail}
                            alt="productImage"
                            className="object-fill h-48 w-96"
                          />
                        </Link>
                      </div>
                      <div className="rounded-b-md">
                        <div className="flex justify-between items-start px-2 pt-2 ">
                          <div className="p-2 flex-grow">
                            <h2 className="text-base line-clamp leading-non">
                              {cardData.title}
                            </h2>
                            <p className="text-theme-neutral line-clamp-2 text-sm">
                              {cardData.description}
                            </p>
                            <h3 className="text-theme-neutral line-clamp-2 text-xs capitalize">
                              {cardData.category}
                            </h3>
                          </div>
                          <div className="p-2 text-right">
                            <div className="text-theme-neutral">
                              ${cardData.price}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center px-2 pb-2 ">
                          <div className="w-1/2 p-2">
                            <Button
                              variant="primary"
                              className="block w-full px-3 py-2  uppercase"
                            >
                              wishlist
                            </Button>
                          </div>
                          <div className="w-1/2 p-2">
                            <Button
                              variant="secondary"
                              className="block w-full px-3 py-2 uppercase "
                            >
                              Add to cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default ProductCategoryPage;

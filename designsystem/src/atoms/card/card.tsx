import React, { HTMLAttributes, useEffect, useState } from "react";
import { Card, Button } from "design-system";
import { allProducts } from "../../api/api";
import { Link } from "react-router-dom";

export interface CardProps extends HTMLAttributes<HTMLElement> {}

function CardComponent() {
  const [demoData, setDemoData] = useState([]);
  useEffect(() => {
    allProducts().then((response) => {
      // console.log(response["data"][0].id);
      setDemoData(response["data"]);
    });
  }, []);

  return (
    <>
      {demoData &&
        demoData.map((cardData: any) => {
          return (
            <>
              <Card className="bg-transparent  justify-around group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-lg">
                <div className="mb-3 md:mb-3.5 flex w-full justify-center">
                  <Link to={`/product/${cardData.id}`}>
                    <img
                      src={cardData.thumbnail}
                      alt="productImage"
                      style={{ width: "200px" }}
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
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
    </>
  );
}

export default CardComponent;

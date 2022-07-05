import React, { HTMLAttributes, useEffect, useState } from "react";
import { Card, Button } from "design-system";
export interface CardProps extends HTMLAttributes<HTMLElement> {}

function CardComponent() {
  const [demoData, setDemoData] = useState();
  useEffect(() => {
    fetch("data/db.json")
      .then((response) => response.json())
      .then((cardData) => {
        return setDemoData(cardData);
      });
  }, []);

  return demoData ? (
    demoData.map((cardData: any) => {
      return (
        <>
          <Card>
            <div className="bg-theme-neutral75 h-64 p-4 bg-no-repeat bg-center bg-cover rounded-t-md">
              <img src={cardData.images} alt="productImage" />
            </div>
            <div className="rounded-b-md">
              <div className="flex justify-between items-start px-2 pt-2 ">
                <div className="p-2 flex-grow">
                  <h1 className="font-medium text-xl ">{cardData.title}</h1>
                  <p className="text-gray-500 font-nunito">
                    {cardData.description}
                  </p>
                </div>
                <div className="p-2 text-right">
                  <div className="text-theme-neutral"> {cardData.price}</div>
                  {/* <div className="text-xs text-theme-neutral line-through">$80</div> */}
                </div>
              </div>
              <div className="flex justify-center items-center px-2 pb-2 ">
                <div className="w-1/2 p-2">
                  <Button className="block w-full bg-theme-primary px-3 py-2  uppercase">
                    wishlist
                  </Button>
                </div>
                <div className="w-1/2 p-2">
                  <Button className="block w-full bg-theme-neutral65 px-3 py-2  uppercase ">
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </>
      );
    })
  ) : (
    <div>Data Not Available!!</div>
  );
}
export default CardComponent;

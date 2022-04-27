import { useEffect, useState } from "react";
import Icon from "../icons/icon";

export interface CardProps {}
const data = [
  { item: "Batsman", url: "#" },
  { item: "India", url: "#" },
  { item: "RCB", url: "#" },
];
export const ProductCard = () => {
  const [demoData, setDemoData] = useState();
  useEffect(() => {
    fetch("api/get_user_data")
      .then((response) => response.json())
      .then((cardData) => {
        return setDemoData(cardData);
      });
  }, []);
  return demoData ? (
    demoData.map((cardData: any) => {
      // console.log(carDetails.car_type);
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full p-2">
            <div className="bg-white shadow-lg hover:shadow-xl rounded-lg ">
              <div className="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover">
                <div className="text-right">
                  <button className="text-pink-500 hover:text-pink-600 p-2 rounded-full bg-black">
                    <Icon kind="wishlist" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start px-2 pt-2">
                <div className="p-2 flex-grow">
                  <h1 className="font-medium text-xl font-poppins">
                    Product name{cardData.productName}
                  </h1>
                  <p className="text-gray-500 font-nunito">
                    Short description here{cardData.shortDescription}
                  </p>
                </div>
                <div className="p-2 text-right">
                  <div className="text-teal-500 font-semibold text-lg font-poppins">
                    $40{cardData.discountPrice}
                  </div>
                  <div className="text-xs text-gray-500 line-through font-poppins">
                    $80{cardData.originalPrice}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 pb-2">
                <div className="w-1/2 p-2">
                  <button className="block flex items-center w-full bg-black hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                    <Icon kind="eye" size={14} />
                    <span className="ml-2">
                      Details{cardData.productDetails}
                    </span>
                  </button>
                </div>
                <div className="w-1/2 p-2">
                  <button className="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>Data Not Available!!</div>
  );
};

import * as React from "react";
import { Card, Button } from "design-system";
import { Link } from "react-router-dom";
import Icon from "../icons/icon";
import { CartContext } from "../../Contexts/cart.context";

export interface CardProps {
  // id: number;
  // thumbnail: string;
  // title: string;
  // description: string;
  // category: string;
  // price: number;
  // brand: string;
  // withBrand: boolean;
  CardData: any;
}

export const CardComponent = ({ CardData }: CardProps) => {
  const {
    id,
    thumbnail,
    title,
    description,
    category,
    price,
    brand,
  } = CardData;
  const { saveCartItem } = React.useContext(CartContext);
  const addProductToCart = () => saveCartItem(CardData);
  return (
    <>
      <>
        <Card className="product-card bg-transparent justify-around group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 mb-2 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-lg ">
          <div className="mb-3 md:mb-3.5 flex w-full justify-center">
            <Link
              to={`/product/${id}`}
              className="w-full min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none"
            >
              <img
                src={thumbnail}
                alt="productImage"
                // className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                className="bg-gray-300 w-full h-full object-top object-cover lg:w-full lg:h-full"
              />
            </Link>
          </div>
          <div className="rounded-b-md p-2">
            <div className="flex justify-between items-start">
              <div className=" flex-grow">
                <h2 className="text-base line-clamp leading-non">{title}</h2>
                <p className="text-theme-neutral line-clamp-2 text-sm">
                  {description}
                </p>
                <h3 className="text-theme-neutral line-clamp-2 text-xs capitalize">
                  {category}
                </h3>
                <div className="text-theme-neutral">{brand}</div>
              </div>
              <div className="ml-2 text-right">
                <div className="text-theme-neutral">${price}</div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-2">
              <div className="w-1/2 mr-2">
                <Button
                  variant="primary"
                  className="block w-full px-3 py-2  uppercase h-38"
                >
                  wishlist
                </Button>
              </div>
              <div className="w-1/2 ml-2">
                <Button
                  variant="secondary"
                  className="block w-full px-3 py-2 uppercase h-38"
                  onClick={addProductToCart}
                >
                  <Icon kind="cart" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </>
    </>
  );
};

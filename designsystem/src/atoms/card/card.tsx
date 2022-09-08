import * as React from "react";
import { Card, Button } from "design-system";
import { Link } from "react-router-dom";
import Icon from "../icons/icon";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";
import { useContext } from "react";

export interface CardProps {
  CardData: any;
}

export const CardComponent = ({ CardData }: CardProps) => {
  const { saveCartItem } = React.useContext(CartContext);
  const addProductToCart = () => saveCartItem(CardData);
  const { saveWishlistItem } = useContext(WishlistContext);
  const addProductToWishlist = () => saveWishlistItem(CardData);

  return (
    <>
      <>
        <Card className="card-shadow justify-between group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 mb-2 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-lg ">
          <div className="flex w-full justify-center">
            <Link
              to={`/product/${CardData.id}`}
              className="w-full min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none"
            >
              <img
                src={CardData.thumbnail}
                alt="productImage"
                // className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                className="bg-gray-300 w-full h-full object-top object-cover lg:w-full lg:h-full"
              />
            </Link>
          </div>
          <div className="rounded-b-md p-4 w-full">
            <div className="flex flex-col">
              <div className=" flex-grow">
                <div className="flex flex-row justify-between">
                  <h2 className="text-base line-clamp font-normal text-theme-neutralGray leading-non">
                    {CardData.title}
                  </h2>
                  <div className="ml-6 text-right text-theme-primary font-bold">
                    &#8377;{CardData.price}
                  </div>
                </div>

                <div className="flex flex-row justify-between mt-1 mb-1">
                  <h3 className="text-theme-neutralGray line-clamp-2 text-xs capitalize">
                    {CardData.category}
                  </h3>
                  <div className="text-theme-neutralGray line-clamp-2 text-xs font-semibold capitalize">
                    {CardData.brand}
                  </div>
                </div>
                <p className="line-clamp-2 text-sm text-theme-neutralGray mt-3 mb-1 h-10">
                  {CardData.description}
                </p>
              </div>
              <div className="ml-2 text-right"></div>
              <div className="flex justify-center items-center mt-2">
                <div className="w-1/2 mr-2">
                  <Button
                    variant="primary"
                    className="block w-full px-3 py-2  uppercase h-38"
                    onClick={addProductToWishlist}
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
          </div>
        </Card>
      </>
    </>
  );
};

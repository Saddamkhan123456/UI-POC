import * as React from "react";
import { Button, Card, CardBody } from "design-system";
import classnames from "classnames";
import Icon from "../icons/icon";

export interface ShoppingCartProps extends React.HTMLAttributes<HTMLElement> {
  cartItem?: any;
  cartCard?: boolean;
  imgSize?: boolean;
  isQuantityShow?: boolean;
  isCartItem: boolean;
  addItem?: () => void;
  removeItem?: () => void;
  deleteItem?: () => void;
  addToCart?: () => void;
  addToWishlist?: () => void;
  showRemove?: boolean;
  qty?: boolean;
}

const ItemCard = ({
  cartItem,
  cartCard,
  imgSize,
  showRemove,
  isQuantityShow,
  isCartItem,
  addItem,
  removeItem,
  deleteItem,
  addToCart,
  addToWishlist,
  qty,
}: ShoppingCartProps) => {
  const { title, thumbnail, brand, quantity, price } = cartItem;
  return (
    <Card
      className={classnames(
        cartCard ? "border rounded flex px-4 pt-4" : "px-4 pt-4"
      )}
    >
      <CardBody className="p-0 pb-0 flex w-full">
        <div
          className={
            classnames(imgSize ? "cart-image h-24 w-24 " : "h-36 w-36 ") +
            "flex-shrink-0 overflow-hidden rounded-md border border-theme-neutral80"
          }
        >
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="ml-3 flex flex-1 ">
          <div className="w-full flex flex-col">
            <div className="flex justify-between text-base text-theme-neutral flex-col md:flex-row">
              <h3 className="mr-1">
                <a className="font-medium line-clamp-2"> {title} </a>
                <p className="mt-1 mb-2 text-sm text-theme-neutral55 font-normal capitalize">
                  {brand}
                </p>
              </h3>
              <p className="text-lg font-semibold ml-1">&#8377;{price}</p>
            </div>

            <div className="flex flex-1 items-end justify-between text-sm">
              <div className={classnames(isQuantityShow ? "flex" : "hidden")}>
                <div className="mr-1 flex gap-0.5">
                  {qty ? (
                    <p className="text-gray-500">{quantity}</p>
                  ) : (
                    <>
                      <span onClick={removeItem} className="cursor-pointer">
                        &#8592;
                      </span>
                      <p className="text-gray-500">{quantity}</p>
                      <span onClick={addItem} className="cursor-pointer">
                        &#8594;
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex ml-1">
                {showRemove && (
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={deleteItem}
                    className="font-medium text-theme-primary hover:text-theme-primary p-0 mr-2"
                  >
                    <Icon kind="delete" size={16} />
                  </Button>
                )}
                <>
                  {isCartItem ? (
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={addToWishlist}
                      className="font-medium text-theme-primary hover:text-theme-primary p-0"
                    >
                      <Icon kind="wishlist" size={16} />
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={addToCart}
                      className="font-medium text-theme-primary hover:text-theme-primary p-0"
                    >
                      <Icon kind="cart" size={16} />
                    </Button>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ItemCard;

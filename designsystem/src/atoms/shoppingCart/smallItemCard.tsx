import * as React from "react";
import { Card, CardBody } from "design-system";
import classnames from "classnames";

export interface SmallItemCardProps extends React.HTMLAttributes<HTMLElement> {
  cartItem?: any;
  cartCard?: boolean;
  imgSize?: boolean;
}

const SmallItemCard = ({ cartItem, cartCard, imgSize }: SmallItemCardProps) => {
  const { title, thumbnail, quantity, price } = cartItem;
  return (
    <Card className={classnames(cartCard ? "border rounded flex px-4" : "")}>
      <CardBody className="p-3 flex w-full">
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
        <div className="lg:ml-4 sm:ml-0  flex flex-1 ">
          <div className="w-full flex flex-col">
            <div className="flex justify-between  text-theme-neutral  lg:mt-0  mt-2 flex-col md:flex-row">
              <h3 className="mr-1">
                <p className="font-normal text-sm line-clamp-2"> {title} </p>
              </h3>
              <p className="font-semibold ml-1 text-sm text-theme-neutral">
                &#8377;{price}
              </p>
            </div>

            <div className="flex flex-1 items-end justify-between text-sm">
              <div className="mr-1 flex gap-0.5">
                <p className="text-theme-neutralGray ">Qty: {quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SmallItemCard;

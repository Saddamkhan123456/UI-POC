import React, { HTMLAttributes } from "react";
import { QuantityBox } from "../../molecules/quantityBox";
import { Button, Card, CardBody } from "design-system";
import classnames from "classnames";

export interface ShoppingCartProps extends HTMLAttributes<HTMLElement> {
  title: string;
  brand: string;
  price: any;
  thumbnail: any;
  qtyUpdate: boolean;
  showQty: boolean;
  cartCard: boolean;
}

const ItemCard = ({
  title,
  brand,
  price,
  thumbnail,
  qtyUpdate,
  showQty,
  cartCard,
}: ShoppingCartProps) => {
  return (
    <Card className={classnames(cartCard ? "" : "mb-2")}>
      <CardBody className="pl-0 pr-0 px-0 flex w-full">
        <div className="mr-2 h-36 w-36 flex-shrink-0 overflow-hidden rounded-md border border-theme-neutral80">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="lg:ml-4 sm:ml-0  flex flex-1 ">
          <div className="w-full flex flex-col">
            <div className="flex justify-between text-base text-theme-neutral  lg:mt-0  mt-2 flex-col md:flex-row">
              <h3>
                <a className="font-medium"> {title} </a>
                <p className="mt-1 mb-2 text-sm text-theme-neutral55 font-normal">
                  {brand}
                </p>
              </h3>
              <p className="text-lg font-semibold">${price}</p>
            </div>

            <div className="flex flex-1 items-end justify-between text-sm">
              <div>
                <p className="text-gray-500">
                  Qty {showQty ? <span>1</span> : ""}
                </p>
                {qtyUpdate ? <QuantityBox /> : ""}
              </div>
              <div className="flex">
                <div className="remove-button">
                  <Button
                    variant="secondary"
                    size="small"
                    className="font-medium text-theme-primary hover:text-theme-primary p-0"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ItemCard;

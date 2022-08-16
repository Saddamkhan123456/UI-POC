import React from "react";
import { HTMLAttributes } from "react";
import { Button } from "design-system";
import { Link } from "react-router-dom";
import { QuantityBox } from "../../molecules/quantityBox";
import ItemCard from "./itemCard";

export const ShoppingCart = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flow-root">
        <ul className="-my-6 divide-y">
          <li className="flex flex-col md:flex-row py-8">
            <ItemCard
              title={""}
              brand={""}
              price={undefined}
              thumbnail={undefined}
              qtyUpdate={false}
              showQty={false}
              cartCard={false}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

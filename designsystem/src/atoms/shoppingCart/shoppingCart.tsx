import React from "react";
import ItemCard from "./itemCard";

export const ShoppingCart = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flow-root">
        <ul className="-my-6 divide-y">
          <li className="flex flex-col md:flex-row py-8">
            <ItemCard
              title="Black High Neck Cropped Top"
              brand="Nike"
              price="1294"
              thumbnail="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13843398/2021/4/19/1847ce50-4f55-4bad-aaf0-de8a2b31fbbf1618820819735-Inddus-Teal-Blue-Solid-Ruffle-Accordion-Pleat-Saree-71616188-1.jpg"
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

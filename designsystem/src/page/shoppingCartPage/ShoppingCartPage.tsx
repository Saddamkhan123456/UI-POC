import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import { ShoppingCart } from "../../atoms/shoppingCart";

const ShoppingCartPage = () => {
  return (
    <>
      <div className="flex px-6 lg:px-6 sm:px-3 py-16">
        <div className="flex flex-col md:flex-row w-full">
          <div className="lg:w-2/3 sm:w-full">
            <div className="lg:px-6 sm:px-2 w-full">
              <h1 className="text-3xl font-black mb-12">Shopping Cart</h1>
              <ShoppingCart
                title="Black High Neck Cropped Top"
                brand="Nike"
                price="1294"
                thumbnail="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13843398/2021/4/19/1847ce50-4f55-4bad-aaf0-de8a2b31fbbf1618820819735-Inddus-Teal-Blue-Solid-Ruffle-Accordion-Pleat-Saree-71616188-1.jpg"
              />
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 sm:w-full">
            <div className="lg:px-6 sm:px-2 mt-8 md:mt-16 w-full">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;

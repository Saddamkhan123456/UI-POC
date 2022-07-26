import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import { ShoppingCart } from "../../atoms/shoppingCart";

const CheckoutPage = () => {
  return (
    <>
      <div className="flex px-6 lg:px-6 sm:px-3 py-16">
        <div className="flex flex-col md:flex-row w-full">
          <div className="lg:w-2/3 sm:w-full">
            <div className="lg:px-6 sm:px-2 w-full">
              <h1 className="text-3xl font-black mb-12">Checkout</h1>
              
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 sm:w-full">
            <div className="lg:px-6 sm:px-2 mt-8 md:mt-16 w-full">
           
              <OrderSummary 
              subTotal="99"
              shippingCharges="5"
              tax='10'
              orderTotal="124"
              showShoppingCart={true}

              />
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

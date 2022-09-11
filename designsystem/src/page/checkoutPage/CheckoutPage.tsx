import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import CheckoutForm from "./checkoutForm";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col container mx-auto p-3">
      <h1 className="text-xl capitalize leading-none pb-4 mb-4 border-b font-medium">
        Checkout
      </h1>
      <div className="flex py-8">
        <div className="flex flex-col md:flex-row w-full overflow-auto">
          <div className="lg:w-3/5 md:w-2/3 sm:w-full">
            <div className="w-full">
            <CheckoutForm />
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/3 sm:w-full">
          <div className="w-full lg:pl-6 sm:pl-2">
            <OrderSummary showShoppingCart={true} isCheckout={false} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

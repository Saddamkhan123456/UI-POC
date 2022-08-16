import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import CheckoutForm from "./checkoutForm";

const CheckoutPage = () => {
  return (
    <div className="p-3 h-full">
      <h1 className="text-3xl font-black mb-3">Checkout</h1>
      <div className="flex py-8">
        <div className="flex flex-col md:flex-row w-full">
          <div className="lg:w-2/3 sm:w-full">
            <div className="w-full">
              <CheckoutForm />
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 sm:w-full">
            <div className="lg:px-6 sm:px-2  w-full">
              <OrderSummary
                subTotal="99"
                shippingCharges="5"
                tax="10"
                orderTotal="124"
                showShoppingCart={true}
                isCheckout={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import ItemCard from "../../atoms/shoppingCart/itemCard";
import { CartContext } from "../../Contexts/cart.context";
import CheckoutForm from "./checkoutForm";

const CheckoutPage = () => {
  const { cartItems } = React.useContext(CartContext);
  return (
    <div className="p-6 lg:p-6 sm:p-3 overflow-auto">
      <h1 className="text-3xl font-black mb-3">Checkout</h1>
      <div className="flex py-8">
        <div className="flex flex-col md:flex-row w-full overflow-auto">
          <div className="lg:w-2/3 sm:w-full">
            <div className="w-full mt-8">
              {cartItems.map((item) => {
                return (
                  <ItemCard
                    key={item.id}
                    cartItem={item}
                    cartCard={false}
                    imgSize={false}
                    showRemove={true}
                    isQuantityShow={true}
                    isCartItem={true}
                  />
                );
              })}
            </div>
            <div className="w-full">
              <CheckoutForm />
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 sm:w-full">
            <div className="lg:px-6 sm:px-2  w-full">
              <OrderSummary showShoppingCart={true} isCheckout={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

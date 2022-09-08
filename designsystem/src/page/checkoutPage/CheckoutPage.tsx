import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import ItemCard from "../../atoms/shoppingCart/itemCard";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";
import CheckoutForm from "./checkoutForm";

const CheckoutPage = () => {
  const { cartItems , saveCartItem , deleteCartItem , flushCartItem } = React.useContext(CartContext);
  const {saveWishlistItem} = React.useContext(WishlistContext)
  return (
    <div className="flex flex-col p-3 container mx-auto">
      <h1 className="mb-3 text-theme-neutral capitalize text-2xl mt-4">Checkout</h1>
      <div className="flex py-8">
        <div className="flex flex-col md:flex-row w-full overflow-auto">
          <div className="lg:w-2/3 sm:w-full">
            
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

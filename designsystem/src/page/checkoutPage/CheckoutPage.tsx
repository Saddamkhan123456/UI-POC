import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import ItemCard from "../../atoms/shoppingCart/itemCard";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";
import CheckoutForm from "./checkoutForm";

const CheckoutPage = () => {
  const {
    cartItems,
    saveCartItem,
    deleteCartItem,
    flushCartItem,
  } = React.useContext(CartContext);
  const { saveWishlistItem } = React.useContext(WishlistContext);
  return (
    <div className="flex flex-col container mx-auto py-3 h-full">
      <h1 className="text-xl capitalize leading-none pb-4 mb-4 border-b font-medium">
        Checkout
      </h1>
      <div className="flex pb-5">
        <div className="flex flex-col md:flex-row w-full overflow-auto">
          <div className="w-3/5 flex justify-center">
            <CheckoutForm />
          </div>
          <div className="w-2/5">
            <OrderSummary showShoppingCart={true} isCheckout={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

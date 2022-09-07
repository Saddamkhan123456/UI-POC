import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import ItemCard from "../../atoms/shoppingCart/itemCard";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import {WishlistContext} from '../../Contexts/wishlist.context'
import EmptyShoppingCart from "../../atoms/emptyShoppingCart/emptyShoppingCart";

const ShoppingCartPage = () => {
  const { cartItems , saveCartItem , deleteCartItem , flushCartItem } = useContext(CartContext);
  const {saveWishlistItem} = useContext(WishlistContext)
  return (
    <div className="flex flex-col p-3 container mx-auto">
      <h1 className="text-3xl font-black mb-3">Shopping Cart</h1>
      {cartItems && cartItems.length > 0 ? (
          <div className="flex py-8">
          <div className="flex flex-col md:flex-row w-full">
            <div className="lg:w-2/3 sm:w-full">
              <div className="w-full">
                {cartItems?.length > 0 &&
                  cartItems.map((item) => {
                    return (
                      <ItemCard
                        key={item.id}
                        cartItem={item}
                        cartCard={false}
                        imgSize={false}
                        isQuantityShow={true}
                        isCartItem={true}
                        addItem={() => saveCartItem(item)}
                        removeItem={() => deleteCartItem(item)}
                        deleteItem={() => flushCartItem(item)}
                        addToWishlist={() => saveWishlistItem(item)}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/3 sm:w-full">
              <div className="lg:px-6 sm:px-2  w-full">
                <OrderSummary showShoppingCart={false} isCheckout={true} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyShoppingCart />
      ) }
    
    </div>
  );
};

export default ShoppingCartPage;

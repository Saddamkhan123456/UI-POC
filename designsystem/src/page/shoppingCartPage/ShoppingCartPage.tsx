import React from "react";
import { OrderSummary } from "../../atoms/orderSummary/orderSummary";
import ItemCard from "../../atoms/itemCard/itemCard";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";
import EmptyShoppingCart from "../../atoms/emptyShoppingCart/emptyShoppingCart";

const ShoppingCartPage = () => {
  const { cartItems, saveCartItem, deleteCartItem, flushCartItem } = useContext(
    CartContext
  );
  const { saveWishlistItem } = useContext(WishlistContext);
  return (
    <div className="flex flex-col container mx-auto py-4 px-1 md:px-0">
      <h1 className="text-xl capitalize leading-none pb-4 mb-4 border-b font-medium">
        Shopping Cart
      </h1>
      {cartItems && cartItems.length > 0 ? (
        <div className="flex pb-5">
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
                        showRemove={true}
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
      )}
    </div>
  );
};

export default ShoppingCartPage;

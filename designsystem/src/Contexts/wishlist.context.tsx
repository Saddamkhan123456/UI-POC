import * as React from "react";
import { ICartItem } from "../types/cart";
import { WishlistContextType } from "../types/wishlist";

const addWishlistItem = (wishlistItems, productsToAdd) => {
  //update the quantity if the item alraedy exists
  const existingWishlistItem = wishlistItems.find((wishlistItems) => {
    return wishlistItems.id === productsToAdd.id;
  });

  if (existingWishlistItem) {
    return wishlistItems.map((cartItem) =>
      cartItem.id === productsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //normal return
  return [...wishlistItems, { ...productsToAdd, quantity: 1 }];
};
const removeWishlistItem = (wishlistItems, productToRemove) => {
  const existingWishlistItem = wishlistItems.find((cartItem) => {
    return cartItem.id === productToRemove.id;
  });

  if (existingWishlistItem === 1) {
    return wishlistItems.filter(
      (cartItem) => cartItem.id !== productToRemove.id
    );
  }

  if (existingWishlistItem) {
    return wishlistItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
export const WishlistContext = React.createContext<WishlistContextType | null>(
  null
);

const flushWishlistItemQuantity = (wishlistItems, wishlistItemToFlush) => {
  console.log("HHIe");
  return wishlistItems.filter(
    (cartItem) => cartItem.id !== wishlistItemToFlush.id
  );
};

export const WishlistProvider: React.FC<React.ReactNode> = ({ children }) => {
  // console.log(JSON.parse(localStorage.getItem("cartItems")));
  const [wishlistItems, setWishlistItems] = React.useState<ICartItem[]>(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const saveWishlistItem = (wishlistItemToAdd: ICartItem) => {
    setWishlistItems(addWishlistItem(wishlistItems, wishlistItemToAdd));
  };
  const deleteWishlistItem = (wishlistItemToRemove: ICartItem) => {
    setWishlistItems(removeWishlistItem(wishlistItems, wishlistItemToRemove));
  };
  const flushWishlistItem = (wishlistItemToFlush: ICartItem) => {
    setWishlistItems(
      flushWishlistItemQuantity(wishlistItems, wishlistItemToFlush)
    );
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        saveWishlistItem,
        deleteWishlistItem,
        flushWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

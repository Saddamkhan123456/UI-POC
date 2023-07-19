import * as React from "react";
import { ICartItem } from "../types/cart";
import { WishlistContextType } from "../types/wishlist";

const addWishlistItem = (wishlistItems, productsToAdd) => {
  //update the quantity if the item alraedy exists
  const existingWishlistItem = wishlistItems.find((wishlistItems) => {
    return wishlistItems.id === productsToAdd.id;
  });

  if (existingWishlistItem) {
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(
        wishlistItems.map((wishlistItem) =>
          wishlistItem.id === productsToAdd.id
            ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
            : wishlistItem
        )
      )
    );
  } else {
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify([...wishlistItems, { ...productsToAdd, quantity: 1 }])
    );
  }
  return JSON.parse(localStorage.getItem("wishlistItems"));
};

export const WishlistContext = React.createContext<WishlistContextType | null>(
  null
);

const flushWishlistItemQuantity = (wishlistItems, wishlistItemToFlush) => {
  const filterValue = wishlistItems.filter(
    (wishlistItem) => wishlistItem.id !== wishlistItemToFlush.id
  );
  localStorage.setItem("wishlistItems", JSON.stringify(filterValue));
  return JSON.parse(localStorage.getItem("wishlistItems"));
};

export const WishlistProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = React.useState<ICartItem[]>(
    JSON.parse(localStorage.getItem("wishlistItems")) || []
  );
  const [wishlistCount, setWishlistCount] = React.useState<number>(0);

  React.useEffect(() => {
    const newWishlistCount: number =
      wishlistItems?.length > 0
        ? wishlistItems.reduce(
            (total, wishlistItem) => total + wishlistItem.quantity,
            0
          )
        : 0;
    setWishlistCount(newWishlistCount);
  }, [wishlistItems]);

  const saveWishlistItem = (wishlistItemToAdd: ICartItem) => {
    setWishlistItems(addWishlistItem(wishlistItems, wishlistItemToAdd));
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
        wishlistCount,
        saveWishlistItem,
        flushWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

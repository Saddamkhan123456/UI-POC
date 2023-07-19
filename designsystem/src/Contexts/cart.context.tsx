import * as React from "react";
import { ICartItem, CartContextType } from "../types/cart";
import {
  flushCartItemQuantity,
  addCartItemQuantity,
  removeCartItemQuantity,
} from "./helper";

export const CartContext = React.createContext<CartContextType | null>(null);

export const CartProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<ICartItem[]>(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartCount, setCartCount] = React.useState<number>(0);
  const [cartTotal, setCartTotal] = React.useState<number>(0);
  const [orderTotal, setOrderTotal] = React.useState<number>(0);
  const [taxAmount, setTaxAmount] = React.useState<number>(0);

  React.useEffect(() => {
    const newCartCount: number =
      cartItems?.length > 0
        ? cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        : 0;
    setCartCount(newCartCount);
  }, [cartItems]);
  React.useEffect(() => {
    const newCartTotal: number =
      cartItems?.length > 0
        ? cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
          )
        : 0;
    setCartTotal(newCartTotal);
  }, [cartItems]);
  React.useEffect(() => {
    const newTaxAmount: number = cartTotal * 0.18;
    setTaxAmount(Math.round(newTaxAmount));
    const newOrderTotal: number = cartTotal + newTaxAmount;
    setOrderTotal(Math.round(newOrderTotal));
  }, [cartTotal]);

  const saveCartItem = (cartItemToAdd: ICartItem) => {
    setCartItems(addCartItemQuantity(cartItems, cartItemToAdd));
  };
  const deleteCartItem = (cartItemToRemove: ICartItem) => {
    setCartItems(removeCartItemQuantity(cartItems, cartItemToRemove));
  };
  const flushCartItem = (cartItemToFlush: ICartItem) => {
    setCartItems(flushCartItemQuantity(cartItems, cartItemToFlush));
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        saveCartItem,
        cartCount,
        deleteCartItem,
        flushCartItem,
        cartTotal,
        orderTotal,
        taxAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

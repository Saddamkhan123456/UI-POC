import { HTMLAttributes } from "react";
import { Button, Hr } from "design-system";
// import ItemCard from "../shoppingCart/itemCard";
import { useNavigate } from "react-router-dom";
import {CartContext} from '../../Contexts/cart.context'
import * as React from 'react'

export interface OrderSummaryProps extends HTMLAttributes<HTMLElement> {
  isCheckout?: boolean;
  showShoppingCart?: boolean;
}


export const OrderSummary = ({
  isCheckout,
  showShoppingCart,
}: OrderSummaryProps) => {
  const navigate = useNavigate();
  const navigateCheckout = () => {
    // 👇️ navigate to /
    navigate('/checkout');
  };
  const {cartTotal ,orderTotal , taxAmount , cartItems} = React.useContext(CartContext) 
  return (
    <div className="flex p-8 flex-col bg-theme-neutral85 rounded-sm">
      <h2 className=" pb-3 mb-4 ">Order Summary</h2>
      <Hr />
      {/* {showShoppingCart ? (
        <>
        <div className="h-full d-flex max-h-64 overflow-scroll "> 
        {cartItems.map((item) => {
                return (<ItemCard
                  key={item.id}
                  cartItem= {item}
                  cartCard={false} imgSize={false}  showRemove={false}              
                  />)
              })}
        </div></>
      ) : (
        ""
      )} */}
      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Subtotal:</div>
        <div className="text-theme-neutral10 text-sm ">&#8377;{cartTotal}</div>
      </div>
      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Tax estimate</div>
        <div className="text-theme-neutral10 text-sm">&#8377;{taxAmount}</div>
      </div>
      <div className="flex justify-between py-3">
        <div className="text-theme-neutral10 text-lg font-semibold">
          Order Total
        </div>
        <div className="text-theme-neutral10 text-lg font-semibold">
        &#8377;{orderTotal}
        </div>
      </div>
      {isCheckout ? (
        <div className="flex justify-between py-3">
          <Button
            variant="primary"
            className="block w-full px-3 py-2 rounded-sm font-semibold"
            onClick={navigateCheckout}
          >
            Checkout
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

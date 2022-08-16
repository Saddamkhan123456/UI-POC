import React from "react";
import { HTMLAttributes } from "react";
import { Button, Hr } from "design-system";
import ItemCard from "../shoppingCart/itemCard";

export interface OrderSummaryProps extends HTMLAttributes<HTMLElement> {
  isCheckout: boolean;
  subTotal: string;
  shippingCharges: string;
  tax: string;
  orderTotal: string;
  showShoppingCart: boolean;
}

export const OrderSummary = ({
  isCheckout,
  shippingCharges,
  subTotal,
  tax,
  orderTotal,
  showShoppingCart
}: OrderSummaryProps) => {
  return (
    <div className="flex p-8 flex-col bg-theme-neutral85 rounded-sm">
      <h2 className=" pb-3 mb-4 ">Order Summary</h2>
      <Hr />
      {showShoppingCart ? (
      <ItemCard
        title="Black High Neck Cropped Top"
        brand="Nike"
        price="1294"
        thumbnail="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13843398/2021/4/19/1847ce50-4f55-4bad-aaf0-de8a2b31fbbf1618820819735-Inddus-Teal-Blue-Solid-Ruffle-Accordion-Pleat-Saree-71616188-1.jpg"
        qtyUpdate={false}
        showQty={true}
        cartCard={false}
      />
      ) : (
        ""
      )}
      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Subtotal:</div>
        <div className="text-theme-neutral10 text-sm ">${subTotal}</div>
      </div>
      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Shipping estimate</div>
        <div className="text-theme-neutral10 text-sm">${shippingCharges}</div>
      </div>
      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Tax estimate</div>
        <div className="text-theme-neutral10 text-sm">${tax}</div>
      </div>
      <div className="flex justify-between py-3">
        <div className="text-theme-neutral10 text-lg font-semibold">
          Order Total
        </div>
        <div className="text-theme-neutral10 text-lg font-semibold">
          ${orderTotal}
        </div>
      </div>
      {isCheckout ? (
        <div className="flex justify-between py-3">
          <Button
            variant="primary"
            className="block w-full px-3 py-2 rounded-sm font-semibold"
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

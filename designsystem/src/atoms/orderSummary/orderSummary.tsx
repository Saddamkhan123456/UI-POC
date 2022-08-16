import React from "react";
import { HTMLAttributes } from "react";
import { Button } from "design-system";

export interface OrderSummaryProps extends HTMLAttributes<HTMLElement> {
  isCheckout: boolean;
}

export const OrderSummary = ({ isCheckout }: OrderSummaryProps) => {
  return (
    <div className="flex p-8 flex-col bg-theme-neutral85 rounded-sm">
      <h2 className=" pb-3 mb-4 ">Order Summary</h2>

      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Subtotal:</div>
        <div className="text-theme-neutral10 text-sm ">$99.00</div>
      </div>
      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Shipping estimate</div>
        <div className="text-theme-neutral10 text-sm">$5.00</div>
      </div>
      <div className="flex justify-between py-3 border-b border-theme-neutral80 ">
        <div className="text-theme-neutral55 text-sm">Tax estimate</div>
        <div className="text-theme-neutral10 text-sm">$8.00</div>
      </div>
      <div className="flex justify-between py-3">
        <div className="text-theme-neutral10 text-lg font-semibold">
          Order Total
        </div>
        <div className="text-theme-neutral10 text-lg font-semibold">
          $112.32
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

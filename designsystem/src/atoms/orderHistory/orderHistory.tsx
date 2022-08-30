import React from "react";
import { HTMLAttributes } from "react";
import { Card } from "design-system";
import ItemCard from "../shoppingCart/itemCard";



export interface OrderHistoryProps extends HTMLAttributes<HTMLElement> {
  orderNumber: string;
  totalAmount: string;
 
}

export const OrderHistory = ({orderNumber, totalAmount}:  OrderHistoryProps) => {
  return (
    <>
      <Card className="border rounded-md"> 
          <div className="flex p-4 border-b mb-4">
              <div className="ml-0 mr-3">
                  <h6 className="text-sm text-theme-neutral10 mb-2 font-semibold">Order Number</h6>
                  <p className="text-xs text-theme-neutral55">{orderNumber}</p>
              </div>
              <div className="ml-3 mr-0">
                  <h6 className="text-sm text-theme-neutral10 mb-2 font-semibold">Total Amount</h6>
                  <p className="text-xs text-theme-neutral55">${totalAmount}</p>
              </div>
          </div> 
         <div>
        
         </div>
      </Card>
    </>
  );
};

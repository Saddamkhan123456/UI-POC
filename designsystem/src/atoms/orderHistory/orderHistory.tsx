import { v4 as uuidv4 } from 'uuid';
import { HTMLAttributes } from "react";

export interface OrderHistoryProps extends HTMLAttributes<HTMLElement> {
  orderId: string;
  totalAmount: string;
}

export const OrderHistory = ({ orderId, totalAmount }: OrderHistoryProps) => {
 
  return (
    <>
      <div className="flex p-4 border-b mb-2">
        <div className="ml-0 mr-3">
          <h6 className="text-sm text-theme-neutral10 mb-2 font-semibold">
            Order Id
          </h6>
          <p className="text-xs text-theme-neutral55">{uuidv4()}</p>
        </div>
        <div className="ml-3 mr-0">
          <h6 className="text-sm text-theme-neutral10 mb-2 font-semibold">
            Total Amount
          </h6>
          <p className="text-xs text-theme-neutral55">&#8377;{totalAmount}</p>
        </div>
      </div>
    </>
  );
};

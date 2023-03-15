import { HTMLAttributes } from 'react';

export interface OrderHistoryProps extends HTMLAttributes<HTMLElement> {
  orderId: string;
  orderDate?: string;
}

export const OrderHistory = ({ orderId, orderDate }: OrderHistoryProps) => {
  return (
    <>
      <div className='flex p-5 border-b justify-between'>
        <div className='ml-0 mr-3'>
          <h6 className='text-sm text-theme-neutral10 mb-2 font-semibold'>Order Id</h6>
          <p className='text-xs text-theme-neutral55'>{orderId}</p>
        </div>
        <div className='ml-3 mr-0'>
          <h6 className='text-sm text-theme-neutral10 mb-2 font-semibold'>Order Date</h6>
          <p className='text-xs text-theme-neutral55'>{orderDate}</p>
        </div>
      </div>
    </>
  );
};

import * as React from "react";
import { OrderContextType } from "../types/order";


export const OrderContext = React.createContext<OrderContextType | null>(
  null
);

export const OrderProvider: React.FC<React.ReactNode> = ({children}) => {
  const [orderId, setOrderIds] = React.useState<string>(
    ''
  )

 const setOrderId = (id : string) => {
    setOrderIds(id)
  }
  return (
    <OrderContext.Provider value={{orderId, setOrderId}}>
      {children}
    </OrderContext.Provider>
  )
}
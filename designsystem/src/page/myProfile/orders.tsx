import React from "react";

import { Card, CardBody} from "design-system";
import { OrderHistory } from "../../atoms/orderHistory/orderHistory";


const Orders = () => {
 
  return (
     <>
     <Card className="grow flex h-full w-1/2 items-center justify-center">
        <CardBody className="w-full">
          <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
            Order History
          </h2>
            <OrderHistory
            orderNumber="WERT5678"
            totalAmount="78989"
            />

        </CardBody>
    </Card>
     </>
  );
};

export default Orders;

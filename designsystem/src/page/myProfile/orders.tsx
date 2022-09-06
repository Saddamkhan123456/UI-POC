import React, { useState, useEffect } from "react";
import { CartContext } from "../../Contexts/cart.context";
import { orderHistoryGet } from "../../api/api";
import { Card, CardBody } from "design-system";
import { OrderHistory } from "../../atoms/orderHistory/orderHistory";
import ItemCard from "../../atoms/shoppingCart/itemCard";

const Orders = () => {
  const { cartItems } = React.useContext(CartContext);
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    orderHistoryGet().then((response) => {
      console.log(response["data"]);
      setOrdersData(response["data"]);
    });
  }, []);
  return (
    <>
      <div className="grow flex flex-col h-full lg:w-1/2 md:w-full items-center justify-center">
        <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6  w-full">
          Order History
        </h2>
        <div className="w-full flex flex-col overflow-auto max-h-45">
        {ordersData.map((data) => {
          return (
            <>
              <Card className="border rounded-md w-full mb-4">
                <CardBody className="w-full">
                  <OrderHistory
                    orderId={data.id}
                    totalAmount={data.orderTotal}
                  />
                  <div className="px-4">
                    {data.checkoutItems.map((item) => {
                      return (
                        <ItemCard
                          key={item.id}
                          cartItem={item}
                          cartCard={false}
                          imgSize={true}
                          showRemove={true}
                          qty={true}
                        />
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </>
        );})}
        </div>
      </div>
    </>
  );
};

export default Orders;

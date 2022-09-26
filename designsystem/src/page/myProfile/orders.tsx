import { useState, useEffect } from "react";
import { orderHistoryGet } from "../../api/api";
import { OrderHistory } from "../../atoms/orderHistory/orderHistory";
import ItemCard from "../../atoms/itemCard/itemCard";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    orderHistoryGet().then((response) => {
      console.log(response["data"]);
      setOrdersData(response["data"]);
    });
  }, []);
  return (
    <>
      <h2 className="text-xl capitalize leading-none pb-4 mb-4 border-b w-full font-medium">
        Order History
      </h2>
      <div className="grow flex flex-col h-full w-4/5 items-center">
        <div className="w-full flex flex-col">
          {ordersData.map((data) => {
            return (
              <>
                <div className="border rounded-md w-full mb-4">
                  <OrderHistory
                    orderId={data.id}
                    totalAmount={data.orderTotal}
                  />
                  <div className="px-5 pt-5">
                    {data.checkoutItems.map((item) => {
                      return (
                        <ItemCard
                          key={item.id}
                          cartItem={item}
                          cartCard={false}
                          imgSize={true}
                          showRemove={false}
                          qty={true}
                          isCartItem={false}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;

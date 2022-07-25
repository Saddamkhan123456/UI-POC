import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderSummary } from "../../atoms/orderSummary";
import { ShoppingCart } from "../../atoms/shoppingCart";


const ShoppingCartPage = () => {
  return (
    <>
     <div>
       <div>

       </div>
       <div>
         <OrderSummary />
       </div>
     </div>
    </>
  );
};

export default ShoppingCartPage;

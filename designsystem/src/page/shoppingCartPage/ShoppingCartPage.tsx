import React from "react";
import { OrderSummary } from "../../atoms/orderSummary";
import ItemCard from "../../atoms/shoppingCart/itemCard";
import { useContext } from "react";
import { CartContext } from '../../Contexts/cart.context'

const ShoppingCartPage = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="p-6 lg:p-6 sm:p-3">
      <h1 className="text-3xl font-black mb-3">Shopping Cart</h1>
      <div className="flex py-8">
        <div className="flex flex-col md:flex-row w-full">
          <div className="lg:w-2/3 sm:w-full">
            <div className="w-full">
              {cartItems.map((item) => {
                return (<ItemCard
                  key={item.id}
                  cartItem= {item}
                  cartCard={false} imgSize={false}  showRemove={false}              
                  />)
              })}
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 sm:w-full">
            <div className="lg:px-6 sm:px-2  w-full">
              <OrderSummary
                showShoppingCart={false}
                isCheckout={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;

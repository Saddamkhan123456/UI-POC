import React, { useEffect, useState } from 'react';
import { OrderSummary } from '../../atoms/orderSummary/orderSummary';
import { useSelector, useDispatch } from 'react-redux';
import ItemCard from '../../atoms/itemCard/itemCard';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/cart.context';
import { WishlistContext } from '../../Contexts/wishlist.context';
import EmptyShoppingCart from '../../atoms/emptyShoppingCart/emptyShoppingCart';
import {
  addCartProducts,
  addWishlistProducts,
  getCartProducts,
  removeCartProducts,
} from '../../redux/actions/ActionsCreators';
import { RootState } from '../../store/configureStore';

const ShoppingCartPage = () => {
  const [cartData, setCartData] = useState([]);
  const cartlist = useSelector((state: RootState) => state.getCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getCartProducts());
  }, []);

  useEffect(() => {
    setCartData(cartlist?.products?.products);
  }, [cartlist?.products]);

  const addToWishlist = (cartItem) => {
    dispatch<any>(addWishlistProducts(cartItem.product._id));
  };

  const deleteItem = (cartItem) => {
    dispatch<any>(removeCartProducts({ id: cartItem.product._id }));
  };
  const removeItem = (cartItem) => {
    dispatch<any>(addCartProducts({ id: cartItem.product._id, quantity: -1 }));
  };
  const addItem = (cartItem) => {
    dispatch<any>(addCartProducts({ id: cartItem.product._id, quantity: 1 }));
  };
  return (
    <div className='flex flex-col responsive-height overflow-auto container mx-auto py-4 px-1 md:px-0'>
      <h1 className='text-xl capitalize leading-none pb-4 mb-4 border-b font-medium'>Shopping Cart</h1>
      {cartData?.length > 0 ? (
        <div className='flex pb-5'>
          <div className='flex flex-col md:flex-row w-full'>
            <div className='lg:w-2/3 sm:w-full'>
              <div className='w-full'>
                {cartData &&
                  cartData.map((item) => {
                    return (
                      <ItemCard
                        key={item._id}
                        cartItem={item.product}
                        cartCard={false}
                        imgSize={false}
                        quantity={item.quantity}
                        isQuantityShow={true}
                        isCartItem={true}
                        showRemove={true}
                        addItem={() => addItem(item)}
                        removeItem={() => removeItem(item)}
                        deleteItem={() => deleteItem(item)}
                        addToWishlist={() => addToWishlist(item)}
                      />
                    );
                  })}
              </div>
            </div>
            <div className='lg:w-1/3 md:w-1/3 sm:w-full'>
              <div className='lg:px-6 sm:px-2  w-full'>
                <OrderSummary showShoppingCart={false} isCheckout={true} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyShoppingCart />
      )}
    </div>
  );
};

export default ShoppingCartPage;

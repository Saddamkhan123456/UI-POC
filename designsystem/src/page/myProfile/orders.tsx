import { useState, useEffect } from 'react';
import { OrderHistory } from '../../atoms/orderHistory/orderHistory';
import ItemCard from '../../atoms/itemCard/itemCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { getOrders } from '../../redux/actions/ActionsCreators';
import Spinner from '../../atoms/spinner/spinner';

const Orders = () => {
  const order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getOrders());
  }, []);
  return (
    <>
      <h2 className='text-xl capitalize leading-none pb-4 mb-4 border-b w-full font-medium'>Order History</h2>
      {order.loading ? (
        <Spinner />
      ) : (
        <>
          <div className='grow flex flex-col h-full w-4/5 items-center'>
            <div className='w-full flex flex-col'>
              {order.orderData?.map((items) => {
                return (
                  <>
                    <div className='border rounded-md w-full mb-4'>
                      <OrderHistory orderId={items._id} />
                      <div className='px-5 pt-5'>
                        {items.products.map((item) => {
                          return (
                            <ItemCard
                              key={item.product._id}
                              cartItem={item.product}
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
      )}
    </>
  );
};

export default Orders;

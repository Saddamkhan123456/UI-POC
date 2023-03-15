import { useEffect, useState } from 'react';
import { HTMLAttributes } from 'react';
import { Button } from 'design-system';
import { useNavigate } from 'react-router-dom';
import SmallItemCard from '../itemCard/smallItemCard';
import { RootState } from '../../store/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { getCartProducts } from '../../redux/actions/ActionsCreators';

export interface OrderSummaryProps extends HTMLAttributes<HTMLElement> {
  isCheckout?: boolean;
  showShoppingCart?: boolean;
}

export const OrderSummary = ({ isCheckout, showShoppingCart }: OrderSummaryProps) => {
  const [cartData, setCartData] = useState([]);
  const cartlist = useSelector((state: RootState) => state.getCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getCartProducts());
  }, []);

  useEffect(() => {
    setCartData(cartlist?.products?.products);
  }, [cartlist?.products]);

  const navigate = useNavigate();
  const navigateCheckout = () => {
    // 👇️ navigate to /
    navigate('/checkout');
  };
  let cartTotalValue = 0,
    orderTotalValue = 0,
    cartTotalTax = 0;

  const cartValue = () => {
    cartData?.forEach((item) => {
      if (item !== undefined) {
        cartTotalValue += item.quantity * item.price;
        cartTotalTax += (item.price / 100) * 12 * item.quantity;
      }
    });
  };
  cartValue();

  orderTotalValue = cartTotalValue + cartTotalTax;

  return (
    <div className='flex p-3 flex-col bg-theme-neutral85 rounded-sm'>
      <h2 className='text-xl capitalize leading-none pb-4 mb-2 border-b font-medium'>Order Summary</h2>

      {showShoppingCart && cartData ? (
        <>
          <div className='h-full d-flex max-h-64 overflow-auto pr-3'>
            {cartData?.map((item) => {
              return <SmallItemCard key={item.id} cartItem={item} cartCard={false} imgSize={true} />;
            })}
          </div>
        </>
      ) : (
        ''
      )}
      <div className='flex justify-between py-3 border-b border-theme-neutral80 '>
        <div className='text-theme-neutral55 text-sm'>Subtotal:</div>
        <div className='text-theme-neutral10 text-sm '>&#8377;{cartTotalValue.toFixed(2)}</div>
      </div>
      <div className='flex justify-between py-3 border-b border-theme-neutral80 '>
        <div className='text-theme-neutral55 text-sm'>Tax estimate</div>
        <div className='text-theme-neutral10 text-sm'>&#8377;{cartTotalTax.toFixed(2)}</div>
      </div>
      <div className='flex justify-between pt-3 text-md text-theme-neutral10 text-sm'>
        <p className='font-semibold'>Order Total</p>
        <p>&#8377;{orderTotalValue.toFixed(2)}</p>
      </div>
      {isCheckout ? (
        <div className='flex justify-between py-3'>
          <Button variant='primary' className='block w-full px-3 py-2 rounded-sm uppercase' onClick={navigateCheckout}>
            Checkout
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

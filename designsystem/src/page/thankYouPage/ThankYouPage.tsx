import * as React from 'react'
import ThankyouComponent from "../../atoms/thankyou/thankyou";
import {OrderContext} from '../../Contexts/order.context'

const ThankYouPage = () => {
  const {orderId} = React.useContext(OrderContext)
  return (
    <div className="p-6 lg:p-6 sm:p-3 h-full">
        <ThankyouComponent orderId={orderId}/>
    </div>
  );
};

export default ThankYouPage;

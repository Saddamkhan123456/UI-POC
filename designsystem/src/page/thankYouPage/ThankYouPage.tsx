import * as React from 'react'
import ThankyouComponent from "../../atoms/thankyou/thankyou";
import {OrderContext} from '../../Contexts/order.context'

const ThankYouPage = () => {
  const {orderId} = React.useContext(OrderContext)
  return (
    <div className="flex flex-col container mx-auto h-full">
        <ThankyouComponent orderId={orderId}/>
    </div>
  );
};

export default ThankYouPage;

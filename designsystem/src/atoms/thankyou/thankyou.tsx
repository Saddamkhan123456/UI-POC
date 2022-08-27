import { HTMLAttributes } from "react";
import { Card } from "design-system";
import { Link } from "react-router-dom";

export interface ThankyouProps extends HTMLAttributes<HTMLElement> {
  orderId: any;
}
const ThankyouComponent = ({ orderId }: ThankyouProps) => {
  return (
    <Card className="relative max-w-xl p-8 mx-auto mb-8 mt-8 bg-theme-neutral85 rounded-md ">
      <div className="mb-3  flex w-full justify-center flex-col text-center">
        <h1 className="h1">YOUR ORDER HAS BEEN RECEIVED</h1>
        <h2 className="">Thank you for your payment, it’s processing</h2>
        <p>Your order id is: #{orderId}</p>
        <Link to="/" className="text-theme-primary font-bold">Back to home page</Link>
      </div>
    </Card>
  );
};

export default ThankyouComponent;

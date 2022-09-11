import { HTMLAttributes } from "react";
import { Card } from "design-system";
import { Link } from "react-router-dom";
import Icon from "../icons/icon";

export interface ThankyouProps extends HTMLAttributes<HTMLElement> {
  orderId: any;
}
const ThankyouComponent = ({ orderId }: ThankyouProps) => {
  return (
    <Card className="relative max-w-xl p-8 mx-auto mb-8 mt-8 bg-theme-white rounded-md h-full flex justify-center items-center">
      <div className="mb-3  flex w-full justify-center flex-col text-center items-center">
        <Icon kind="success-filled" size={60} className="text-theme-success"/>
        <h1 className="text-3xl text-theme-neutral font-medium mt-5 mb-3">Thank You for your Purchase!</h1>
        <span className="bg-theme-neutral85 p-1 px-3 rounded-full text-sm">Order id: #{orderId}</span>
       
        <h4 className="text-xl text-theme-neutralGray mt-5 font-normal">Thanks for being awesome</h4>
        <h4 className="text-xl text-theme-neutralGray font-normal">We hope you enjoy your purchase</h4>
        <Link to="/" className="text-theme-primary font-normal mt-5">Back to home page</Link>
      </div>
    </Card>
  );
};

export default ThankyouComponent;

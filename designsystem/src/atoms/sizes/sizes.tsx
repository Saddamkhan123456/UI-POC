
import { HTMLAttributes } from "react";
import { Button } from "design-system";

export interface SizesProps extends HTMLAttributes<HTMLElement> {}
export const Sizes = ({ ...props }: SizesProps) => {
 
  
  return (
    <div className="flex flex-row size-box">
       <Button variant="secondary" size="small" className="w-12 rounded mr-2 font-bold size-button">XS</Button>
       <Button variant="secondary" size="small" className="w-12 rounded mr-2 font-bold size-button">S</Button>
       <Button variant="secondary" size="small" className="w-12 rounded mr-2 font-bold size-button">M</Button>
       <Button variant="secondary" size="small" className="w-12 rounded mr-2 font-bold size-button">L</Button>
       <Button variant="secondary" size="small" className="w-12 rounded mr-2 font-bold size-button">XL</Button>
       <Button variant="secondary" size="small" className="w-12 rounded mr-2 font-bold size-button">XXL</Button>
    </div>
  );
};

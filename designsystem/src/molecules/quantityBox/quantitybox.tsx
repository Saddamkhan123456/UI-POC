
import { Input } from "design-system";
import { Button } from "design-system";
import { useState } from "react";

export interface QuantityBoxProps {}

export const QuantityBox = ({...props}: QuantityBoxProps) => {
    const [num, setNum]= useState(0);
    const incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    const decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
    const handleChange = (e)=>{
     setNum(e.target.value);
    }
    return (
       <div className="flex flex-row  w-full relative bg-transparent mt-1 quantity-box">
          <Button variant="secondary" size="small" onClick={decNum} className="minus-button" ><span className="text-xl"> -</span></Button>
          <Input variant="small" type={'number'} className="quantity-input" value={num} onChange={handleChange}/>
          <Button variant="secondary" size="small" onClick={incNum} className="plus-button" ><span className="text-xl">+</span></Button>
       </div>
    )
}
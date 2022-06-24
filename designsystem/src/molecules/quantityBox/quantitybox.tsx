
import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"
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
       <div className="flex flex-row  w-full rounded-lg relative bg-transparent mt-1">
          <Button variant="secondary" size="small" onClick={decNum}><span>-</span></Button>
          <Input variant="small" type={'number'} className="quantity-input" value={num} onChange={handleChange}/>
          <Button variant="secondary" size="small" onClick={incNum}><span>+</span></Button>
       </div>
    )
}
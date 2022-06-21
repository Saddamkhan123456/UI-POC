import {ButtonHTMLAttributes} from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const ButtonGroup = ({
  
  ...props
}: ButtonProps) => {
  return (
    <>
      <div className="flex items-center justify-center inline-flex shadow-md hover:shadow-lg focus:shadow-lg custom-group-button" role="group">
        {props.children}
      </div>
    </>
  );
};





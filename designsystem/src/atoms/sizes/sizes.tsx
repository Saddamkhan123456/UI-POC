import { HTMLAttributes } from "react";
import { Button} from "design-system";
import { ButtonGroup }  from "design-system";

export interface SizesProps extends HTMLAttributes<HTMLElement> {}

export const Sizes = ({}: SizesProps) => {
  return (
    <div className="flex flex-row size-box">
        <ButtonGroup>
    <Button
      children="XS"
      size="small"
      variant="secondary"
      className="w-12 border-r-0 button-border"
      isRounded={false}
    />
    <Button
      children="S"
      size="small"
      variant="secondary"
      className="w-12 border-r-0"
      isRounded={false}
    />
    <Button
      children="M"
      size="small"
      variant="secondary"
      className="w-12 border-r-0"
      isRounded={false}
    />
     <Button
      children="L"
      size="small"
      variant="secondary"
      className="w-12 border-r-0"
      isRounded={false}
    />
    <Button
      children="XL"
      size="small"
      variant="secondary"
      className="w-12 border-r-0 border"
      isRounded={false}
    />
    <Button
      children="2XL"
      size="small"
      variant="secondary"
      className="w-12"
      isRounded={false}
    />
  </ButtonGroup>
     
    </div>
  );
};

export default Sizes;
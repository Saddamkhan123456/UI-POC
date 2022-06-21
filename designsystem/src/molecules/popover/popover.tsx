import { HTMLAttributes, ReactNode } from "react";
import { Tooltip } from "../tootltip";

export interface PopoverProps extends HTMLAttributes<HTMLElement> {
  popoverContent: ReactNode;
  place: string;
  type: string;
  text: ReactNode;
  event?: string;
}

export const Popover = ({ popoverContent, event, ...props }: PopoverProps) => {
  return (
    <>
      <Tooltip
        tooltipContent={popoverContent}
        effect="solid"
        event={event}
        className="popover rounded-lg max-w-lg"
        {...props}
      />
    </>
  );
};

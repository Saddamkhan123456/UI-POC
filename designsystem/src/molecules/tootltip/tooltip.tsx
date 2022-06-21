import { HTMLAttributes } from "react";

import ReactTooltip from "react-tooltip";

export interface TooltipProps extends HTMLAttributes<HTMLElement> {
  text?: any;
  place?: any;
  type?: any;
  effect?: any;
  multiline?: boolean;
  tooltipContent: any;
  delayHide?: number;
  delayShow?: number;
  disable?: boolean;
  clickable?: boolean;
  textColor?: string;
  borderColor?: string;
  border?: boolean;
  backgroundColor?: string;
  event?: string;
  arrowColor?: string;
}

export const Tooltip = ({
  text,
  place,
  type,
  effect,
  tooltipContent,
  multiline,
  delayHide,
  delayShow,
  disable,
  clickable,
  textColor,
  borderColor,
  backgroundColor,
  event,
  border,
  arrowColor,
  ...props
}: TooltipProps) => {
  return (
    <>
      <a
        href="javascript:void(0)"
        data-tip
        data-for="tooltip"
        className="cursor-pointer"
      >
        {text}
      </a>
      {/* <ReactTooltip
        id="tooltip"
        type={type}
        place={place}
        effect={effect}
        delayHide={delayHide}
        delayShow={delayShow}
        disable={disable}
        clickable={clickable}
        textColor={textColor}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        border={border}
        arrowColor={arrowColor}
        event={event}
        {...props}
      >
        <span>{tooltipContent}</span>
      </ReactTooltip> */}
    </>
  );
};

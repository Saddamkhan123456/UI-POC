import { HTMLAttributes } from "react";
import classNames from "classnames";
import ReactSwitch from "react-switch";

export interface SwitchProps extends HTMLAttributes<HTMLElement> {
  checked: boolean;
  label: any;
  onChange(): any;
  disabled: boolean;
  offColor?: string;
  onColor?: string;
  offHandleColor?: string;
  onHandleColor?: string;
  handleDiameter?: number;
  uncheckedIcon?: any;
  checkedIcon?: any;
  uncheckedHandleIcon?: any;
  checkedHandleIcon?: any;
  boxShadow?: string;
  activeBoxShadow?: string;
  height?: number;
  width?: number;
  className?: string;
  borderRadius?: number;
  id?: string;
  name?: string;
  labelPosition?: "left" | "right" | "top" | "bottom";
}

export const Switch = ({
  checked,
  onChange,
  disabled,
  offColor,
  onColor,
  offHandleColor,
  onHandleColor,
  handleDiameter,
  uncheckedIcon,
  checkedIcon,
  uncheckedHandleIcon,
  checkedHandleIcon,
  boxShadow,
  activeBoxShadow,
  height,
  width,
  className,
  borderRadius,
  id,
  name,
  label,
  labelPosition,
  ...props
}: SwitchProps) => {
  return (
    <>
      <label
        className={classNames(
          "switch-container",
          labelPosition === "top" && "flex-col",
          labelPosition === "bottom" && "flex-col-reverse",
          labelPosition === "left" && "flex-row",
          labelPosition === "right" && "flex-row-reverse"
        )}
      >
        <span>{label}</span>
        {/* <ReactSwitch
          disabled={disabled}
          offColor={offColor}
          onColor={onColor}
          offHandleColor={offHandleColor}
          onHandleColor={onHandleColor}
          handleDiameter={handleDiameter}
          uncheckedIcon={uncheckedIcon}
          checkedIcon={checkedIcon}
          uncheckedHandleIcon={uncheckedHandleIcon}
          checkedHandleIcon={checkedHandleIcon}
          boxShadow={boxShadow}
          activeBoxShadow={activeBoxShadow}
          height={height}
          width={width}
          className={className}
          borderRadius={borderRadius}
          id={id}
          name={name}
          onChange={onChange}
          checked={checked}
          {...props}
        /> */}
      </label>
    </>
  );
};

import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import Icon from "../icons/icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: String;
  variant?: String;
  isRounded?: Boolean;
  isActive?: Boolean;
  withIcon?: Boolean;
  iconKind?: String;
  iconOnly?: Boolean;
}

export const Button = ({
  size = "medium",
  variant = "primary",
  children,
  disabled,
  className,
  isRounded = false,
  isActive,
  withIcon = false,
  iconKind = "arrow-right",
  iconOnly = false,
  ...props
}: ButtonProps) => {

  const classes = classNames(
    variant === "link" && disabled ? " text-theme-neutral65 pointer-events-none"
      : variant === "link" && "text-theme-primary  hover:underline hover:text-theme-btnHover active:text-theme-clicked active:no-underline cursor-pointer",
    variant === "primary" && disabled
    ? "bg-theme-disabled text-theme-neutral65 pointer-events-none"
    : variant === "primary" && "bg-theme-primary text-theme-white hover:bg-theme-btnHover active:bg-theme-clicked",
    variant === "secondary" && disabled
    ? "border border-theme-neutral65 text-theme-neutral50 pointer-events-none"
    : variant === "secondary" &&
        "border border-theme-primary hover:bg-theme-hover text-theme-primary active:bg-theme-clicked active:text-theme-white",
    variant === "danger" && disabled
    ? "border border-theme-neutral65 text-theme-neutral50 pointer-events-none"
    : variant === "danger" &&
        "border border-theme-danger hover:bg-theme-danger hover:text-theme-white text-theme-danger active:bg-theme-danger active:text-theme-white",
    variant === "success" && disabled
    ? "border border-theme-neutral65 text-theme-neutral50 pointer-events-none"
    : variant === "success" &&
        "border border-theme-success hover:bg-theme-success hover:text-theme-white text-theme-success active:bg-theme-success active:text-theme-white",
    isActive &&
    (variant === "primary"
      ? "bg-theme-clicked hover:bg-theme-btnHover"
      : variant === "secondary" &&
        "bg-theme-clicked hover:bg-theme-btnHover text-theme-white"),
  )

  return(
    <button
      className={classNames(
        classes,
        size === "small" && (iconOnly ? "py-2 px-2 text-sm leading-4" : "py-2 px-4 text-sm leading-4"),
        size === "medium" && (iconOnly ? "px-3 py-3 text-sm leading-none" : "px-6 py-3 text-sm leading-none"),
        size === "large" && (iconOnly ? "px-4 py-4 text-sm leading-none" :"px-6 py-4 text-sm leading-none"),
        isRounded && "rounded",
        "font-light flex items-center justify-center btn",
        className
      )}
      {...props}
    >
      {!iconOnly && children}
      {withIcon ? <Icon kind={iconKind} className={iconOnly ? "" : "ml-2"} size={16} /> : ''}
    </button>
  )
};

import classNames from "classnames";
import { HTMLAttributes } from "react";
export interface BadgesProps extends HTMLAttributes<HTMLBaseElement> {
  size?: String;
  variant?: String;
  type?: String;
  disabled?: Boolean;
}
export const BadgeComponent = ({
  size = "small",
  variant = "primary",
  type = "rounded",
  children,
  className,
  disabled,
  ...props
}: BadgesProps) => {
  return (
    <>
      <span
        className={classNames(
          (type === "rounded" || type === "pill") &&
            !disabled &&
            `bg-theme-${variant} text-theme-white`,
          (type === "outline" || type === "outline-pill") &&
            !disabled &&
            `border bg-transparent border-theme-${variant} text-theme-${variant}`,
          (type === "rounded" || type === "outline") && `rounded`,
          (type === "outline-pill" || type === "pill") && `rounded-full`,
          size === "small" && "py-1 px-2 text-xs",
          size === "medium" && "py-1.5 px-2.5 text-sm",
          size === "large" && "py-2 px-3 text-base",
          disabled &&
            `bg-theme-disabled border-theme-disabled text-theme-neutral35`,
          className,
          "font-light",
        )}
      >
        {children}
      </span>
    </>
  );
};

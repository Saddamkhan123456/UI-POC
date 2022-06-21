import { HTMLAttributes } from "react";
import classNames from "classnames";
import Icon from "../icons/icon";
import React from "react";

export interface AlertProps extends HTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  kind?: string;
  linkText?: string;
  collapsed?: boolean;
  Closed?: boolean;
}

export const Alert = ({
  size = "small",
  variant = "primary",
  children,
  disabled,
  className,
  kind,
  linkText,
  collapsed = false,
  Closed,
  ...props
}: AlertProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <div className={!isCollapsed ? "block" : "hidden "}>
      <div
        role="alert"
        className={classNames(
          variant === "primary" && !disabled
            ? "bg-theme-primary text-theme-white mb-3"
            : variant === "primary" &&
                "bg-theme-disabled text-theme-neutral35",
          variant === "secondary" && !disabled
            ? "border border-theme-secondary text-theme-secondary mb-3"
            : variant === "secondary" &&
                "border border-theme-neutral70 text-theme-neutral75",

          variant === "danger" && !disabled
            ? "bg-theme-danger text-theme-white mb-3"
            : variant === "danger" &&
                "bg-theme-disabled text-theme-neutral35",
          size === "small" && "py-1.5 px-2.5 text-sm",
          size === "medium" && "py-2 px-4 text-sm",
          size === "large" && "py-3 px-4 text-sm",
          (className = "text-sm alert leading-none")
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2">
              {kind ? <Icon kind={kind} size={10} /> : ""}
            </span>
            {children} &nbsp;
          </div>
          <div
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="cursor-pointer"
          >
            <Icon kind="close" size={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

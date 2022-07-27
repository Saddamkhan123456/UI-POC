import React from "react";
import classNames from "classnames";
import Icon from "../../atoms/icons/icon";

export interface TabItemProps {
  children?: any;
  className?: any;
  active?: boolean;
  onClick?: any;
  tabIndex?: number;
  variant?: "primary" | "success";
  size?: "small" | "medium" | "large";
  isIcon?: boolean;
  iconKind?: any;
  iconOnly?: boolean;
}

const TabItem = ({
  children,
  className,
  active,
  onClick,
  variant = "primary",
  isIcon = false,
  iconKind,
  iconOnly = false,
  size,
}: TabItemProps) => {
  const sizes = classNames(
    size === "small" ? "py-3 text-xs" : "",
    size === "medium" ? "py-4 text-sm" : "",
    size === "large" ? "py-5 text-lg" : ""
  );
  return (
    <div
      onClick={onClick}
      className={classNames(
        "cursor-pointer leading-none p-4 flex items-center bg-transparent text-sm border-b-2 border-theme-neutral75 text-theme-neutral hover:text-theme-neutral hover:bg-theme-neutral85 hover:border-theme-neutral25",
        {
          "border-b-2 text-theme-primary hover:text-theme-primary font-bold border-theme-primary hover:border-theme-primary": active,
        },
        sizes,
        className
      )}
    >
      {isIcon ? (
        <Icon kind={iconKind} size={10} className={iconOnly ? "" : "mr-2"} />
      ) : (
        ""
      )}
      {!iconOnly ? children : ""}
    </div>
  );
};

export default TabItem;

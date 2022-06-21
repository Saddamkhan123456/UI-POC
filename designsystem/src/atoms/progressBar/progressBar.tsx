import { HTMLAttributes } from "react";
import classNames from "classnames";

export interface ProgressProps extends HTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "link";
  showValue?: boolean;
  label?: string;
  value: number;
}

export const ProgressBar = ({
  size = "small",
  variant = "primary",
  children,
  value = 10,
  label,
  showValue,
  className,
  ...props
}: ProgressProps) => {
  return (
    <div className={className}>
      <div className="flex justify-between mb-1">
        {label && <span className="text-base font-medium">{label}</span>}
        {showValue && <span className="text-sm font-medium ">{value}%</span>}
      </div>
      <div
        className={classNames(
          "w-full bg-gray-200 rounded-full",
          size === "small" && "h-1.5",
          size === "medium" && "h-2.5",
          size === "large" && "h-3.5",
        )}
      >
        <div
          className={classNames(
            `rounded-full transition-width duration-500 max-w-full bg-theme-${variant}`,
            size === "small" && "h-1.5",
            size === "medium" && "h-2.5",
            size === "large" && "h-3.5",
          )}
          style={{ width: value + "%" }}
        ></div>
      </div>
    </div>
  );
};

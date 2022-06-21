import { HTMLAttributes } from "react";
import classNames from "classnames";

export interface CheckboxProps extends HTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "success";
  checked?: any;
  disabled?: false | true | undefined;
  labelPosition?: "left" | "right" | "top" | "bottom";
  label?: string;
  onChange(): any;
}

export const Checkbox = ({
  variant = "success",
  size = "medium",
  checked,
  disabled,
  className,
  label,
  labelPosition = "right",
  onChange,
}: CheckboxProps) => {
  return (
    <div
      className={classNames(
        disabled ? "pointer-events-none opacity-2" : "cursor-pointer",
        "checkbox",
        "inline-flex",
        "items-center",
        "justify-center",
        "relative",
        labelPosition === "top" || labelPosition === "bottom"
          ? "flex-col"
          : "flex-row"
      )}
    >
      <input
        id="checkbox"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        className={classNames(
          "opacity-0 absolute left-0",
          size === "small" && "h-3.5",
          size === "medium" && "h-4",
          size === "large" && "h-6",
          disabled ? "pointer-events-none" : "cursor-pointer",
          className
        )}
        type="checkbox"
      />
      <div
        className={classNames(
          size === "small" && "h-3.5 w-3.5",
          size === "medium" && "h-4 w-4",
          size === "large" && "h-6 w-6",
          "border-solid",
          "border",
          `border-theme-${variant}`,
          "flex",
          "justify-center",
          "items-center",
          checked ? `bg-theme-${variant}` : "",
          labelPosition === "left" || labelPosition === "top"
            ? "order-1"
            : null,
          disabled
            ? "pointer-events-none bg-theme-neutral75"
            : "cursor-pointer"
        )}
      >
        <svg
          className={classNames(
            "fill-current hidden pointer-events-none",
            size === "small" && "h-3 w-3",
            size === "medium" && "h-3.5 w-3.5",
            size === "large" && "h-5 w-5"
          )}
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(-9 -11)" fill="#fff" fillRule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
      <label
        htmlFor="checkbox"
        className={classNames(
          labelPosition === "left"
            ? "mr-2 mb-0"
            : labelPosition === "right"
            ? "ml-2 mb-0"
            : labelPosition === "top"
            ? "mb-2"
            : labelPosition === "bottom"
            ? "mt-2 mb-0"
            : null,
          size === "small"
            ? "text-sm"
            : size === "medium"
            ? "text-base"
            : size === "large"
            ? "text-lg"
            : null,
          disabled ? "pointer-events-none" : "cursor-pointer"
        )}
      >
        {label}
      </label>
    </div>
  );
};

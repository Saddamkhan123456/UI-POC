import React, { HTMLAttributes } from "react";
import classNames from "classnames";

export interface RadioProps extends HTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  checked?: false | true | undefined;
  disabled?: false | true | undefined;
  labelPosition?: "left" | "right" | "top" | "bottom";
  label?: string;
  variant?: "primary" | "secondary" | "success";
  name?: string;
  value?: string;
  id?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange(): any;
}

export const Radio = ({
  size,
  checked,
  disabled,
  labelClassName,
  inputClassName,
  className,
  onChange,
  label,
  labelPosition = "right",
  variant = "success",
  name,
  value,
  id,
}: RadioProps) => {
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
          : "flex-row",
        className
      )}
    >
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        className={classNames(
          "opacity-0 absolute left-0 z-10",
          size === "small" && "h-3.5  w-3.5",
          size === "medium" && "h-4 w-4",
          size === "large" && "h-6 w-6",
          disabled ? "pointer-events-none" : "cursor-pointer",
          inputClassName
        )}
        type="radio"
      />
      <div
        className={classNames(
          size === "small" && "h-3.5 w-3.5",
          size === "medium" && "h-4 w-4",
          size === "large" && "h-6 w-6",
          labelPosition === "left" || labelPosition === "top"
            ? "order-1"
            : null,
          `flex relative rounded-full border border-solid border-theme-${variant} items-center justify-center`
        )}
      >
        <span
          className={classNames(
            size === "small" && "h-1.5 w-1.5",
            size === "medium" && "h-2 w-2",
            size === "large" && "h-3 w-3",
            `block relative rounded-full items-center justify-center bg-theme-${variant} ${
              checked ? "visible" : "invisible"
            }`
          )}
        ></span>
      </div>
      <label
        htmlFor={id}
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
          disabled ? "pointer-events-none" : "cursor-pointer",
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
};

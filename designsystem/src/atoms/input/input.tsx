import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import Icon from "../icons/icon";
import { Loader } from "../loader";

export interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  type: string;
  label?: string;
  feedbackText?: string;
  feedbackState?: "normal" | "has-error" | "has-success";
  variant?: "small" | "medium" | "large";
  disabled?: boolean;
  loadingInput?: boolean;
  feedbackIcon?: string;
  defaultValue?: any;
  isRounded?: boolean;
  className?: any;
  onClick?: any;
  value?: any;
}

export const Input = ({
  type = "text",
  children,
  disabled,
  placeholder,
  feedbackText,
  feedbackState = "normal",
  label,
  variant = "medium",
  loadingInput,
  feedbackIcon,
  defaultValue,
  isRounded,
  className,
  onClick,
  value,
  ...props
}: InputProps) => {
  const variantClass = classNames(
    variant === "small" && "py-2 px-4 text-sm leading-4",
    variant === "medium" && "px-6 py-3 text-sm leading-none",
    variant === "large" && "px-6 py-4 text-sm leading-none",
  )
  const feedbackStateClass = classNames(
    feedbackState === "has-error" && "border-theme-danger text-theme-danger",
    feedbackState === "has-success" && "border-theme-success text-theme-success",
  )
  return (
    <div className="form-group relative mb-4">
      {label && (
        <label className={`${disabled ? "text-theme-neutral65" : ""}`}>
          {label}
        </label>
      )}
      <input
        value={value}
        type={type}
        className={`focus:outline-none form-control mb-0 form-control-${variant} ${variantClass}
          ${isRounded ? 'rounded' : 'rounded-none'}
         ${loadingInput ? "loading-input placeholder-opacity-0" : ""} ${feedbackStateClass} ${className} `}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        onClick={onClick}
      />
      {loadingInput && (
        <div className={` absolute top-1/2 mt-3 w-full h-5 px-4 transform -translate-y-1/2 bg-transparent`}>
          <Loader loading={true} type="linear" />
        </div>
      )}
      {feedbackIcon && (
        <span className={`feedback-icon absolute right-2 top-9 -mb-2 text-theme-neutral65 ${feedbackStateClass}`}>
          <Icon kind={feedbackIcon} size={12} />
        </span>
      )}
      {feedbackState && feedbackText && (
        <span className={feedbackStateClass + " text-xs"}>{feedbackText}</span>
      )}
    </div>
  );
};

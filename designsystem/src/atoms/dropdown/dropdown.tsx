import classNames from "classnames";
import React, { useState, HTMLAttributes } from "react";
import Icon from "../icons/icon";
import { Button } from "../button/button";

export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "link" | "dropRight";
  disabled?: boolean;
  kind?: any;
  items: Array<String>;
}

export const DropdownButton = ({
  size = "small",
  variant = "primary",
  children,
  disabled,
  className,
  kind,
  items,
  ...props
}: DropdownProps) => {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownValue(e.target.innerHTML);
    setDropdownState(!dropdownState);
  };
  return (
    <div className="container">
      <div className={`dropdown relative`}>
        <Button
          onClick={handleDropdownClick}
          variant={variant !== "link" ? variant : ""}
          size={size}
          className={classNames(
            variant === "link" &&
              (!disabled
                ? "py-2 hover:underline hover:text-theme-btnHover active:text-theme-clicked active:no-underline"
                : "text-theme-disabled"),
            className,
            "font-light"
          )}
          disabled={disabled}
        >
          <div className="flex items-center">
            {dropdownValue === "" ? (
              <div className="w-4 h-4 rounded-full">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
            ) : (
              dropdownValue
            )}
            <span>
              <Icon kind={kind} size={16} className="ml-2" />
            </span>
          </div>
        </Button>
        {items && (
          <div
            id="dropdown-container"
            className={`dropdown-items drop-left bg-theme-neutral ${
              dropdownState ? "isVisible" : "isHidden"
            }`}
          >
            {items.map((data) => {
              return (
                <div className="dropdown-item px-6 text-white hover:bg-theme-neutral15 focus:bg-theme-neutral15 hover:text-white">
                  <div
                    className="dropdown__link"
                    onClick={(e) => handleSetDropdownValue(e)}
                  >
                    {console.log(data)}
                    {data}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

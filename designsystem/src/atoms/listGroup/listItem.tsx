import classNames from "classnames";

export interface ListItemProps {
  disabled?: boolean;
  variant?: "basic";
  children?: any;
  size?: "small" | "medium" | "large";
  type?: any;
}

export const ListItem = ({
  variant = "basic",
  disabled,
  children,
  size,
  type,
  ...props
}: ListItemProps) => {
  return (
    <>
      <li
        className={classNames(
          variant === "basic" && !disabled
            ? "px-6 py-2 border-b border-gray-200 w-full rounded-t-lg hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer"
            : variant === "basic" &&
                "bg-theme-disabled text-theme-neutral35",
          size === "small" && "py-1.5 px-2.5 text-sm",
          size === "medium" && "py-2 px-3 text-base",
          size === "large" && "py-3 px-4 text-base"
        )}
      >
        {children}
      </li>
    </>
  );
};

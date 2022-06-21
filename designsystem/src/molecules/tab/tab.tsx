export interface TabProps {
  className?: string;
  children: any;
}

export interface TabItemProps {
  children?: any;
  className?: any;
  active?: boolean;
  onClick?: any;
  tabIndex?: number;
  variant?: "primary" | "secondary" | "success";
  size?: "small" | "medium" | "large";
}

export interface TabPaneProps {
  children?: any;
  className?: any;
  active?: boolean;
  onClick?: any;
  tabIndex?: number;
}

export const Tab = ({ className = "", children }: TabProps) => {
  return <div className={`flex ${className}}`}>{children}</div>;
};

export const TabItem = ({
  children,
  className,
  active,
  onClick,
  variant = "primary",
  size,
}: TabItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer 
        leading-none
        ${!size && "py-2.5 text-base"}
        px-4 
        bg-transparent 
        text-sm
        ${size === "small" ? "py-1.5 text-xs" : ""}
        ${size === "medium" ? "py-2.5 text-base" : ""}
        ${size === "large" ? "py-3.5 text-lg" : ""}
        ${!variant && "bg-theme-primary"}
        ${active ? "text-white" : ""}
        ${
          active && variant === "primary"
            ? "bg-theme-primary border-b-4 border-solid"
            : ""
        }
        ${
          active && variant === "secondary"
            ? "bg-theme-secondary border-b-4 border-solid"
            : ""
        }
        ${className ? className : ""}
        `}
    >
      {children}
    </div>
  );
};

export const TabPane = ({ children, active, className }: TabPaneProps) => {
  return (
    <div className={`${className} ${active ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

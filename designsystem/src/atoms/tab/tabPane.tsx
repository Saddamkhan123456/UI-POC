import React from "react";
import classNames from "classnames";
import Icon from "../../atoms/icons/icon";

export interface TabPaneProps {
  children?: any;
  className?: any;
  active?: boolean;
  onClick?: any;
  tabIndex?: number;
}

const TabPane = ({ children, active, className }: TabPaneProps) => {
  return (
    <div className={`${className} ${active ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

export default TabPane;
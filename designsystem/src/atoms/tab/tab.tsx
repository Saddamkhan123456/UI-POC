import React from "react";
import classNames from "classnames";
import Icon from "../../atoms/icons/icon";

export interface TabProps {
  className?: string;
  children: any;
}

const Tab = ({ className = "", children }: TabProps) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Tab;

import React from "react";
import styles from "./Sidebar.module.css";

interface SidebarBodyProps {
  children?: React.ReactNode;
  className?: string;
}

const SidebarBody = ({ children, className }: SidebarBodyProps) => {
  return <div className={`${styles.sidebarBody} ${className}`}>{children}</div>;
};

export default SidebarBody;

import React from "react";
import styles from "./List.module.css";
interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const List = ({ children, className }: ListProps) => {
  return <ul className={`${styles.list} ${className}`}>{children}</ul>;
};

export default List;

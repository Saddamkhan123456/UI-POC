import React from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  defaultLabel: string;
  dropdownItems: { value: string; label: string }[];
  className?: string;
}

const Dropdown = ({ defaultLabel, dropdownItems, className }: DropdownProps) => {
  return (
    <select className={`${styles.formSelect} ${className}`}>
      <option value="">{defaultLabel}</option>
      {dropdownItems.map((item: any, index: number) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

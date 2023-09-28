import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className={styles.button} type="button">
      {label}
    </button>
  );
};

export default Button;

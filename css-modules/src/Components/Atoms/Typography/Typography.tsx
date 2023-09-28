import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
  variant?: "h3" | "h4" | "h5" | "h6" | "subtitle" | "body" | "caption";
  color?: string;
  text: any;
  fontWeight?: "normal" | "bold" | "bolder";
}

const Typography = ({ variant, color, text, fontWeight }: TypographyProps) => {
  let variantClass = "";
  switch (variant) {
    case "h3":
      variantClass = styles.h3;
      break;
    case "h4":
      variantClass = styles.h4;
      break;
    case "h5":
      variantClass = styles.h5;
      break;
    case "h6":
      variantClass = styles.h6;
      break;
    case "subtitle":
      variantClass = styles.subtitle;
      break;
    case "body":
      variantClass = styles.body;
      break;
    case "caption":
      variantClass = styles.caption;
      break;
    default:
      variantClass = styles.body;
      break;
  }
  const fontWeightClass = fontWeight === "bold" ? styles.bold : fontWeight === "bolder" ? styles.bolder : styles.normal;
  return (
    <div className={`${styles.typography} ${variantClass} ${fontWeightClass}`} style={{ color: color }}>
      {text}
    </div>
  );
};

export default Typography;

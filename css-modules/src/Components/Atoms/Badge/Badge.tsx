import React from "react";
import styles from "./Badge.module.css";
import Icon from "../../Icons/Icons";

interface BadgeProps {
  label: string;
  icon?: string;
  isIcon?: boolean;
  size?: number;
}

const Badge = ({ label, icon, isIcon, size }: BadgeProps) => {
  const getBackgroundColor = (label: string) => {
    const badgeLabel = label.toLowerCase();
    switch (badgeLabel) {
      case "medium impact":
        return styles.badgeWarning;
      case "high impact":
        return styles.badgeSuccess;
      case "low impact":
        return styles.badgeLight;
      case "hard problem":
        return `${styles.badgeTransparent} ${styles.hardProblem}`;
      case "blogs & tl articles":
        return `${styles.badgeTransparent} ${styles.blogArticles}`;
      default:
        return styles.badgeTransparent;
    }
  };

  const backgroundColor = getBackgroundColor(label);
  const badgeStyle = `${styles.badge} ${backgroundColor}`;

  return (
    <span className={badgeStyle}>
      {isIcon && <Icon kind={icon} size={size} />}
      {label}
    </span>
  );
};

export default Badge;

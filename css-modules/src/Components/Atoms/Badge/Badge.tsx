import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  const getBackgroundColor = (label: string) => {
    const badgeLabel = label.toLowerCase();
    switch (badgeLabel) {
      case 'medium impact':
        return 'badge-warning';
      case 'high impact':
        return 'badge-success';
      case 'low impact':
        return 'badge-light';
      default:
        return 'badge-light';
    }
  };

  const backgroundColor = getBackgroundColor(label);
  const badgeStyle = `${styles.badge} ${styles[backgroundColor]}`;

  return <span className={badgeStyle}>{label}</span>;
};

export default Badge;

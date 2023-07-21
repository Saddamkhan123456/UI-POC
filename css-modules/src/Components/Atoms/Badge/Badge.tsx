import React from 'react'
import styles from './Badge.module.css';

interface BadgeProps{
  label: string;
  backgroundColor?: 'badge-warning' | 'badge-success' | 'badge-light';
}

const Badge = ({label, backgroundColor}:BadgeProps) => {
  const badgeStyle = backgroundColor ? `${styles.badge} ${styles[backgroundColor]}` : styles.badge;
  return (
    <span className={badgeStyle}>{label}</span>
  )
}

export default Badge;
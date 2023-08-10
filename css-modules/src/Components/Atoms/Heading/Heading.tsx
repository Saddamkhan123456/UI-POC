import React from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
  label: string;
  textCenterAlign?: boolean;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = ({ label, textCenterAlign, variant = 'h3' }: HeadingProps) => {
  const headingClassName = textCenterAlign ? `${styles.heading} ${styles.textCenterAlign}` : styles.heading;
  const HeadingTag = variant;
  return <HeadingTag className={headingClassName}>{label}</HeadingTag>;
};

export default Heading;

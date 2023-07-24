import React from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
  label: string;
  textCenterAlign?: boolean;
}

const Heading = ({ label, textCenterAlign }: HeadingProps) => {
  const headingClassName = textCenterAlign ? `${styles.heading} ${styles.textCenterAlign}` : styles.heading;
  return <h2 className={headingClassName}>{label}</h2>;
};

export default Heading;

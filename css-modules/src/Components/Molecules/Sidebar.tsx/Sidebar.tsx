import React from 'react';
import styles from './Sidebar.module.css';
import Heading from '../../Atoms/Heading/Heading';

interface TechDigestDetailsProps {
  title: string;
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Sidebar = ({ title, children, variant = 'h3' }: TechDigestDetailsProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Heading label={title} variant={variant} />
      </div>
      <div className={styles.sidebarBody}>{children}</div>
    </div>
  );
};

export default Sidebar;

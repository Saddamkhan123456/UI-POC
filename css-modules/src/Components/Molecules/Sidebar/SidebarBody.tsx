import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarBodyProps {
  children?: React.ReactNode;
}

const SidebarBody = ({ children }: SidebarBodyProps) => {
  return <div className={styles.sidebarBody}>{children}</div>;
};

export default SidebarBody;

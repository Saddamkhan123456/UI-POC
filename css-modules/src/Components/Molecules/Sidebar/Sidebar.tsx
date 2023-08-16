import React from 'react';
import styles from './Sidebar.module.css';
import Heading from '../../Atoms/Heading/Heading';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export default Sidebar;

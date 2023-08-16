import React from 'react';
import styles from './Sidebar.module.css';
import Heading from '../../Atoms/Heading/Heading';

interface SideBarHeaderProps {
  title: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SidebarHeader = ({ title, variant }: SideBarHeaderProps) => {
  return (
    <div className={styles.sidebarHeader}>
      <Heading label={title} variant={variant} />
    </div>
  );
};

export default SidebarHeader;

import React from 'react';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: Array<BreadcrumbItem>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.breadcrumbInner}>
        sdf
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <li className={styles.breadcrumbSeparator}>&gt;</li>}
            <li className={`${styles.breadcrumbItem} ${index === items.length - 1 ? styles.active : ''}`}>
              {item.link ? <a href={item.link}>{item.label}</a> : <span>{item.label}</span>}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

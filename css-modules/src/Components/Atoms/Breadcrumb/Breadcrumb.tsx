import React from "react";
import styles from "./Breadcrumb.module.css";
import { items } from "./Data";

interface BreadcrumbProps {
  data: any;
}

const Breadcrumb = ({ data }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.breadcrumbInner}>
        {data.map((item: any, index: any) => (
          <React.Fragment key={index}>
            {index > 0 && <li className={styles.breadcrumbSeparator}>&gt;</li>}
            <li className={`${styles.breadcrumbItem} ${index === items.length - 1 ? styles.active : ""}`}>
              {item.link ? <a href={item.link}>{item.label}</a> : <span>{item.label}</span>}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

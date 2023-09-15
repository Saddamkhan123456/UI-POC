import React from "react";
import styles from "./ViewMore.module.css";

interface ViewMoreProps {
  label: string;
  href: string;
}

const ViewMore = ({ label, href }: ViewMoreProps) => {
  return (
    <a href={href} className={styles.viewmore}>
      {label}
    </a>
  );
};

export default ViewMore;

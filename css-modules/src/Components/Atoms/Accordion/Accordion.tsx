import React, { useState } from "react";
import styles from "./Accordion.module.css";
import Icon from "../../Icons/Icons";
interface AccordionProps {
  title: string;
  count?: string;
  children?: React.ReactNode;
}

const Accordion = ({ title, children, count }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.active : ""}`}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        {title} ({count})
        <span className={isOpen ? styles.arrowUp : styles.arrowDown}>
          <Icon kind="arrow-down" size={14} />
        </span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

export default Accordion;

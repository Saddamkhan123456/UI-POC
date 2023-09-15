import React, { useState } from "react";
import { accordionData } from "./Data";
import Accordion from "./Accordion";
import styles from "./Accordion.module.css";

const TechDigestAccordion = () => {
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>("Brief Details");
  const handleSubMenuClick = (label: string) => {
    setSelectedSubMenu(label);
  };
  return (
    <>
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} count={item.submenuItems.length.toString()}>
          <div className={styles.submenu}>
            {item.submenuItems.map((submenuItem, subIndex) => (
              <a
                key={subIndex}
                className={selectedSubMenu === submenuItem.label ? styles.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubMenuClick(submenuItem.label);
                }}
              >
                {submenuItem.label}
              </a>
            ))}
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default TechDigestAccordion;

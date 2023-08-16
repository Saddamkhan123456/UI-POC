import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./TechDigestDetails.module.css";
import Sidebar from "../../Components/Molecules/Sidebar/Sidebar";
import Accordion from "../../Components/Atoms/Accordion/Accordion";
import { accordionData } from "./Data";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";
import ArticalDetailedContent from "./ArticalDetailedContent";
import TechDigestAccordion from "../../Components/Atoms/Accordion/TechDigestAccordion";

interface TechDigestDetailsProps {
  content?: React.ReactNode;
}

const TechDigestDetails = ({ content }: TechDigestDetailsProps) => {
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>("Brief Details");

  const handleSubMenuClick = (label: string) => {
    setSelectedSubMenu(label);
  };

  const renderSubMenuContent = () => {
    switch (selectedSubMenu) {
      case "Brief Details":
        return <ArticalDetailedContent />;
      case "Best Practices":
        return <div>Best Practices</div>;
      case "How to setup":
        return <div>How to setup</div>;
      case "Code starter kit":
        return <div>Code starter kit</div>;
      case "Our thoughts":
        return <div>Our thoughts</div>;
      case "Hard Problems":
        return <div>Hard Problems</div>;
      case "Innovations":
        return <div>Innovations</div>;
      case "Blogs & TL Articles":
        return <div>Blogs & TL Articles</div>;
      case "Common Mistakes":
        return <div>Common Mistakes</div>;
      case "Tech Talks":
        return <div>Tech Talks</div>;
      case "Experts":
        return <div>Experts</div>;
      case "Team":
        return <div>Team</div>;

      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className={styles.row}>
        <div className={styles.leftSidebar}>
          <Sidebar>
            <SidebarHeader title="Purescript" />
            <SidebarBody>
              <TechDigestAccordion />
            </SidebarBody>
          </Sidebar>
        </div>
        <div className={styles.rightSidebar}>
          <Sidebar>{renderSubMenuContent()}</Sidebar>
        </div>
      </div>
    </Layout>
  );
};

export default TechDigestDetails;

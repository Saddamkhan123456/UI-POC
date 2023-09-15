import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./TechDigestDetails.module.css";
import Sidebar from "../../Components/Molecules/Sidebar/Sidebar";
import Accordion from "../../Components/Atoms/Accordion/Accordion";
import { accordionData } from "./Data";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";
import BriefDetails from "./BriefDetails";
import BestPractices from "./BestPractices";
import HowToSetup from "./HowToSetup";
import CodeStarterKit from "./CodeStarterKit";
import OurThoughts from "./OurThoughts";
import HardProblems from "./HardProblems";
import Innovations from "./Innovations";
import BlogsAndTLArticles from "./BlogsAndTLArticles ";
import CommonMistakes from "./CommonMistakes";
import TechTalks from "./TechTalks";
import Experts from "./Experts";
import Teams from "./Teams";

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
        return <BriefDetails />;
      case "Best Practices":
        return <BestPractices />;
      case "How to setup":
        return <HowToSetup />;
      case "Code starter kit":
        return <CodeStarterKit />;
      case "Our thoughts":
        return <OurThoughts />;
      case "Hard Problems":
        return <HardProblems />;
      case "Innovations":
        return <Innovations />;
      case "Blogs & TL Articles":
        return <BlogsAndTLArticles />;
      case "Common Mistakes":
        return <CommonMistakes />;
      case "Tech Talks":
        return <TechTalks />;
      case "Experts":
        return <Experts />;
      case "Team":
        return <Teams />;

      default:
        return "";
    }
  };

  return (
    <Layout className={styles.fullwidthContainer}>
      <div className={styles.row}>
        <div className={styles.leftSidebar}>
          <Sidebar>
            <SidebarHeader title="Purescript" />
            <SidebarBody>
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

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarHeader from "../Sidebar/SidebarHeader";
import SidebarBody from "../Sidebar/SidebarBody";
import TechDigestAccordion from "../../Atoms/Accordion/TechDigestAccordion";

const LeftSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader title="Purescript" />
      <SidebarBody>
        <TechDigestAccordion />
      </SidebarBody>
    </Sidebar>
  );
};

export default LeftSideBar;

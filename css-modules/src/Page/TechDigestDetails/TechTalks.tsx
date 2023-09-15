import React from "react";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";
import NoDataAvailable from "../../Components/Atoms/NoDataAvailable/NoDataAvailable";

const TechTalks = () => {
  return (
    <>
      <SidebarHeader title="Tech Talks" variant="h1" />
      <SidebarBody>
        <NoDataAvailable />
      </SidebarBody>
    </>
  );
};

export default TechTalks;

import React from "react";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";
import NoDataAvailable from "../../Components/Atoms/NoDataAvailable/NoDataAvailable";

const Experts = () => {
  return (
    <>
      <SidebarHeader title="Experts" variant="h1" />
      <SidebarBody>
        <NoDataAvailable />
      </SidebarBody>
    </>
  );
};

export default Experts;

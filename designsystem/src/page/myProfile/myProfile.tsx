import React from "react";
import Tab from "../../atoms/tab/tab";
import TabItem from "../../atoms/tab/tabItem";
import TabPane from "../../atoms/tab/tabPane";
import Account from "./account";

const MyProfile = () => {
  const [active, setActiveTab] = React.useState(1);
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="grow h-full p-4">
      <Tab>
        <TabItem
          variant="primary"
          onClick={() => handleTabChange(1)}
          tabIndex={1}
          active={active === 1}
        >
          {"Account"}
        </TabItem>
        <TabItem
          variant="primary"
          onClick={() => handleTabChange(2)}
          tabIndex={2}
          active={active === 2}
        >
          {"Orders"}
        </TabItem>
      </Tab>
      <TabPane
        className=" mt-4 p-4 flex items-center justify-center flex-col"
        active={active === 1}
      >
        <Account />
      </TabPane>
      <TabPane
        className=" mt-4 p-4 flex items-center justify-center flex-col"
        active={active === 2}
      >
        Tab content 2
      </TabPane>
      <TabPane
        className=" mt-4 p-4 flex items-center justify-center flex-col"
        active={active === 3}
      >
        Tab content 3
      </TabPane>
    </div>
  );
};

export default MyProfile;

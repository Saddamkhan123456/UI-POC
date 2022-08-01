import React from "react";
import Tab from "../../molecules/tab/tab";
import TabItem from "../../molecules/tab/tabItem";
import TabPane from "../../molecules/tab/tabPane";
import Account from "./account";

const MyProfile = () => {
  const [active, setActiveTab] = React.useState(1);
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="p-6 lg:p-6 sm:p-3 flex flex-col grow h-full">
      <Tab>
        <TabItem
          variant="primary"
          onClick={() => handleTabChange(1)}
          tabIndex={1}
          active={active === 1}
        >
          {"Tab 1"}
        </TabItem>
        <TabItem
          variant="primary"
          onClick={() => handleTabChange(2)}
          tabIndex={2}
          active={active === 2}
        >
          {"Tab 2"}
        </TabItem>
        <TabItem
          variant="primary"
          onClick={() => handleTabChange(3)}
          tabIndex={3}
          active={active === 3}
        >
          {"Tab 3"}
        </TabItem>
      </Tab>
      <TabPane
        className="border mt-2 p-4 flex align-center justify-center grow h-full"
        active={active === 1}
      >
        <div className="flex align-center justify-center">
          <Account formPropsSets={[]} />
        </div>
      </TabPane>
      <TabPane className="border mt-2 p-4" active={active === 2}>
        Tab content 2
      </TabPane>
      <TabPane className="border mt-2 p-4" active={active === 3}>
        Tab content 3
      </TabPane>
    </div>
  );
};

export default MyProfile;

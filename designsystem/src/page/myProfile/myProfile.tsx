import React from "react";
import { Card, CardBody } from "design-system";
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
    <div className="p-6 lg:p-6 sm:p-3">
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
      <TabPane className="border mt-2 p-4" active={active === 1}>
        <div className="flex align-center justify-center">
          <Account />
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

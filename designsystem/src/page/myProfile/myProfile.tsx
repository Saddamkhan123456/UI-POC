import React from "react";
import Tab from "../../atoms/tab/tab";
import TabItem from "../../atoms/tab/tabItem";
import TabPane from "../../atoms/tab/tabPane";
import Account from "./account";
import Orders from "./orders";

const MyProfile = () => {
  const [active, setActiveTab] = React.useState(1);
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="h-full flex w-full">
      <Tab className="flex-col left-nav product-card">
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
      <div className="flex-grow">
        <TabPane
          className="p-4 flex items-center h-full flex-col overflow-auto"
          active={active === 1}
        >
          <Account name={""} lastName={""} email={""} phoneNumber={""} />
        </TabPane>
        <TabPane
          className="p-4 flex items-center h-full flex-col overflow-auto"
          active={active === 2}
        >
          <Orders />
        </TabPane>
      </div>
    </div>
  );
};

export default MyProfile;

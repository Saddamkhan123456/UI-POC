import { Story } from "@storybook/react";
import React from "react";
import Tab from "./tab";
import TabItem from "./tabItem";
import TabPane from "./tabPane";
import { TabProps } from "./tab";

const TabComponent = {
  title: "Design System/Molecules/Tab",
  component: Tab,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    active: {
      type: "boolean",
    },
    isIcon: {
      type: "boolean",
      defaultValue: true,
    },
    iconKind: {
      type: "any",
      defaultValue: "chart-pie",
    },
    iconOnly: {
      type: "boolean",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default TabComponent;

const PrimaryTemplate: Story<TabProps> = (args) => {
  const [active, setActiveTab] = React.useState(1);
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <Tab>
        <TabItem
          {...args}
          variant="primary"
          onClick={() => handleTabChange(1)}
          tabIndex={1}
          active={active === 1}
        >
          {"Tab 1"}
        </TabItem>
        <TabItem
          {...args}
          variant="primary"
          onClick={() => handleTabChange(2)}
          tabIndex={2}
          active={active === 2}
        >
          {"Tab 2"}
        </TabItem>
        <TabItem
          {...args}
          variant="primary"
          onClick={() => handleTabChange(3)}
          tabIndex={3}
          active={active === 3}
        >
          {"Tab 3"}
        </TabItem>
      </Tab>
      <TabPane className="border mt-2 p-4" active={active === 1}>
        Tab content 1
      </TabPane>
      <TabPane className="border mt-2 p-4" active={active === 2}>
        Tab content 2
      </TabPane>
      <TabPane className="border mt-2 p-4" active={active === 3}>
        Tab content 3
      </TabPane>
    </>
  );
};

export const Primary = PrimaryTemplate.bind({});

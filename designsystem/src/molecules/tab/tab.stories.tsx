import { Story } from "@storybook/react";
import React from "react";
import { Tab, TabItem, TabProps, TabItemProps, TabPane } from "./index";


const TabComponent = {
  title: "Design System/Molecules/Tab",
  component: Tab,
};

export default TabComponent


const PrimaryTemplate: Story<TabProps> = (args) => {
    const [active,setActiveTab] = React.useState(1)
    const handleTabChange = (tabIndex:number)=>{
        setActiveTab(tabIndex)
    }
    return (
        <>
        <Tab>
            <TabItem variant='primary' onClick={()=>handleTabChange(1)} tabIndex={1} active={active===1}>{"Tab 1"}</TabItem>
            <TabItem variant='primary' onClick={()=>handleTabChange(2)} tabIndex={2} active={active===2}>{"Tab 2"}</TabItem>
            <TabItem variant='primary' onClick={()=>handleTabChange(3)} tabIndex={3} active={active===3}>{"Tab 3"}</TabItem>
        </Tab>
        <TabPane className="border mt-2 p-4" active={active===1}>Tab content 1</TabPane>
        <TabPane className="border mt-2 p-4" active={active===2}>Tab content 2</TabPane>
        <TabPane className="border mt-2 p-4" active={active===3}>Tab content 3</TabPane>
        </>
        )
}
    

export const Primary = PrimaryTemplate.bind({});


const SecondaryTemplate: Story<TabItemProps> = (args) => {
    const [active,setActiveTab] = React.useState(1)
    const handleTabChange = (tabIndex:number)=>{
        setActiveTab(tabIndex)
    }
    return (
        <>
        <Tab>
            <TabItem variant='secondary' onClick={()=>handleTabChange(1)} tabIndex={1} active={active===1}>{"Tab 1"}</TabItem>
            <TabItem variant='secondary' onClick={()=>handleTabChange(2)} tabIndex={2} active={active===2}>{"Tab 2"}</TabItem>
            <TabItem variant='secondary' onClick={()=>handleTabChange(3)} tabIndex={3} active={active===3}>{"Tab 3"}</TabItem>
        </Tab>
        <TabPane className="border mt-2 p-4" active={active===1}>Tab content 1</TabPane>
        <TabPane className="border mt-2 p-4" active={active===2}>Tab content 2</TabPane>
        <TabPane className="border mt-2 p-4" active={active===3}>Tab content 3</TabPane>
        </>
        )
}
    

export const Secondary = SecondaryTemplate.bind({});

const SmallTemplate: Story<TabProps> = (args) => {
    const [active,setActiveTab] = React.useState(1)
    const handleTabChange = (tabIndex:number)=>{
        setActiveTab(tabIndex)
    }
    return (
        <>
        <Tab>
            <TabItem size="small" variant='primary' onClick={()=>handleTabChange(1)} tabIndex={1} active={active===1}>{"Tab 1"}</TabItem>
            <TabItem size="small" variant='primary' onClick={()=>handleTabChange(2)} tabIndex={2} active={active===2}>{"Tab 2"}</TabItem>
            <TabItem size="small" variant='primary' onClick={()=>handleTabChange(3)} tabIndex={3} active={active===3}>{"Tab 3"}</TabItem>
        </Tab>
        <TabPane className="border mt-2 p-4" active={active===1}>Tab content 1</TabPane>
        <TabPane className="border mt-2 p-4" active={active===2}>Tab content 2</TabPane>
        <TabPane className="border mt-2 p-4" active={active===3}>Tab content 3</TabPane>
        </>
        )
}
    

export const Small = SmallTemplate.bind({});

const MediumTemplate: Story<TabProps> = (args) => {
    const [active,setActiveTab] = React.useState(1)
    const handleTabChange = (tabIndex:number)=>{
        setActiveTab(tabIndex)
    }
    return (
        <>
        <Tab>
            <TabItem size="medium" variant='secondary' onClick={()=>handleTabChange(1)} tabIndex={1} active={active===1}>{"Tab 1"}</TabItem>
            <TabItem size="medium" variant='secondary' onClick={()=>handleTabChange(2)} tabIndex={2} active={active===2}>{"Tab 2"}</TabItem>
            <TabItem size="medium" variant='secondary' onClick={()=>handleTabChange(3)} tabIndex={3} active={active===3}>{"Tab 3"}</TabItem>
        </Tab>
        <TabPane className="border mt-2 p-4" active={active===1}>Tab content 1</TabPane>
        <TabPane className="border mt-2 p-4" active={active===2}>Tab content 2</TabPane>
        <TabPane className="border mt-2 p-4" active={active===3}>Tab content 3</TabPane>
        </>
        )
}
    

export const Medium = MediumTemplate.bind({});

const LargeTemplate: Story<TabProps> = (args) => {
    const [active,setActiveTab] = React.useState(1)
    const handleTabChange = (tabIndex:number)=>{
        setActiveTab(tabIndex)
    }
    return (
        <>
        <Tab>
            <TabItem size="large" variant='primary' onClick={()=>handleTabChange(1)} tabIndex={1} active={active===1}>{"Tab 1"}</TabItem>
            <TabItem size="large" variant='primary' onClick={()=>handleTabChange(2)} tabIndex={2} active={active===2}>{"Tab 2"}</TabItem>
            <TabItem size="large" variant='primary' onClick={()=>handleTabChange(3)} tabIndex={3} active={active===3}>{"Tab 3"}</TabItem>
        </Tab>
        <TabPane className="border mt-2 p-4" active={active===1}>Tab content 1</TabPane>
        <TabPane className="border mt-2 p-4" active={active===2}>Tab content 2</TabPane>
        <TabPane className="border mt-2 p-4" active={active===3}>Tab content 3</TabPane>
        </>
        )
}
    

export const Large = LargeTemplate.bind({});
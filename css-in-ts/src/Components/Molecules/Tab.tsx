import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

const KRATabs = styled(Tabs)`
  display: flex;
  gap: 2rem;
`;

export const KRATabList = styled(TabList)`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 2rem;
  margin: 0;
  background: #ffffff;
  min-width: 12.5rem;
`;

export const KRATab = styled(Tab)`
  cursor: pointer;
  padding: 0;
  line-height: 1.125rem;
  font-weight: ${({ selected }) => (selected ? 500 : 400)};
  color: ${({ selected }) => (selected ? "#0B93DF" : "#343434")};
  margin-bottom: 1.375rem;
  &:last-child {
    margin: 0;
  }
  &:focus-visible {
    outline: none;
    border: none;
  }
`;

export const KRATabPanel = styled(TabPanel)`
  padding: 2rem;
  background: #ffffff;
  display: ${({ selected }) => (selected ? "block" : "none")};
  flex: 1;
`;

interface ITabProps {
  children: React.ReactNode;
}

const TabsComponent: React.FC<ITabProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <KRATabs
      selectedIndex={selectedIndex}
      onSelect={(index: number) => setSelectedIndex(index)}
    >
      {children}
    </KRATabs>
  );
};

export default TabsComponent;

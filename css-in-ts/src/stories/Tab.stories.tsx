import type { Meta, StoryObj } from "@storybook/react";
import TabComponent, {
  KRATab,
  KRATabList,
  KRATabPanel,
} from "../Components/Molecules/Tab";
import styled from "styled-components";

const Heading = styled.h2`
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.15rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const Content = styled.p`
  font-weight: 400;
  line-height: 1.625rem;
  margin: 0;
`;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Molecules",
  component: TabComponent,
} satisfies Meta<typeof TabComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    title: "Brief Details",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quod,saepe rem quos tempore eveniet, pariatur impedit fugit quia natus dolor inventore harum placeat eius provident unde. Velit, labore",
  },
  {
    title: "Best Practices",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quod,saepe rem quos tempore eveniet, pariatur impedit fugit quia natus dolor inventore harum placeat eius provident unde. Velit, labore",
  },
  {
    title: "How to setup",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quod,saepe rem quos tempore eveniet, pariatur impedit fugit quia natus dolor inventore harum placeat eius provident unde. Velit, labore",
  },
];

export const Tab = () => {
  return (
    <TabComponent>
      <KRATabList>
        {items.map((item: any) => (
          <KRATab key={item.title + "tab"}>{item.title}</KRATab>
        ))}
      </KRATabList>
      {items.map((item: any) => (
        <KRATabPanel key={item.title}>
          <Heading>{item.title}</Heading>
          <Content>{item.description}</Content>
        </KRATabPanel>
      ))}
    </TabComponent>
  );
};

import type { Meta, StoryObj } from "@storybook/react";
import List from "./List";
import ListItem from "./ListItem";
import BookmarkedImg4 from "../../../Assets/Images/bookmarked-img4.png";

const meta = {
  title: "Page/List",
  component: List,

  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;

export const ListWithLargeImages = () => {
  return (
    <List>
      <ListItem
        img={BookmarkedImg4}
        title="Handling and lowering the Boot Up Process: Spot Termination Issue in ACE RTB Servers"
        date="26 Nov 22"
        articleType="Hard Problem"
        articleIcon="hard-problem"
        technology="Apache Kafka"
        author="Rahul"
        impact="MEDIUM IMPACT"
        imageSize={"md"}
      />
    </List>
  );
};
export const ListWithSmallImages = () => {
  return (
    <List>
      <ListItem
        img={BookmarkedImg4}
        title="Handling and lowering the Boot Up Process: Spot Termination Issue in ACE RTB Servers"
        date="26 Nov 22"
        articleType="Hard Problem"
        articleIcon="hard-problem"
        technology="Apache Kafka"
        author="Rahul"
        impact="MEDIUM IMPACT"
        imageSize={"sm"}
      />
    </List>
  );
};

import React from "react";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";
import List from "../../Components/Atoms/List/List";
import ListItem from "../../Components/Atoms/List/ListItem";
import { bookmarkListData } from "../Bookmarked/Data";

const HardProblems = () => {
  return (
    <>
      <SidebarHeader title="Hard Problems" variant="h1" />
      <SidebarBody>
        <List>
          {bookmarkListData.map((data, index) => (
            <ListItem
              key={data.id}
              img={data.img}
              title={data.title}
              date={data.date}
              articleType={data.articleType}
              articleIcon={data.articleIcon}
              technology={data.technology}
              author={data.author}
              impact={data.impact}
              imageSize={"sm"}
            />
          ))}
        </List>
      </SidebarBody>
    </>
  );
};

export default HardProblems;

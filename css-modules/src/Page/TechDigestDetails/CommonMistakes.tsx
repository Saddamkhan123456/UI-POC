import React from "react";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";
import List from "../../Components/Atoms/List/List";
import { bookmarkListData } from "../Bookmarked/Data";
import ListItem from "../../Components/Atoms/List/ListItem";

const CommonMistakes = () => {
  return (
    <>
      <SidebarHeader title="Blogs & TL Articles" variant="h1" />
      <SidebarBody>
        <List>
          {bookmarkListData.map((data, index) => (
            <ListItem
              key={index}
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

export default CommonMistakes;

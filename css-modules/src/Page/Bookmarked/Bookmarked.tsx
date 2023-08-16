import React from "react";
import Layout from "../../Components/Layout/Layout";
import List from "../../Components/Atoms/List/List";
import ListItem from "../../Components/Atoms/List/ListItem";
import { bookmarkListData } from "./Data";

const Bookmarked = () => {
  return (
    <Layout>
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
            imageSize={"md"}
          />
        ))}
      </List>
    </Layout>
  );
};

export default Bookmarked;

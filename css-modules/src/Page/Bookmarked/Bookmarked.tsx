import React from 'react';
import styles from './Bookmarked.module.css';
import Layout from '../../Components/Layout/Layout';
import List from '../../Components/Atoms/List/List';
import ListItem from '../../Components/Atoms/List/ListItem';

const Bookmarked = () => {
  return (
    <Layout>
      <List>
        <ListItem></ListItem>
      </List>
    </Layout>
  );
};

export default Bookmarked;

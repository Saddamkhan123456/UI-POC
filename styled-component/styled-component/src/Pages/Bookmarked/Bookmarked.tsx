import React from 'react';
import Layout from '../Layout';
import ListComponent from '../../Components/List/List';

const Bookmarked = () => {
  return <Layout isBreadcrumbVisible={true} Children={<ListComponent />} />;
};

export default Bookmarked;

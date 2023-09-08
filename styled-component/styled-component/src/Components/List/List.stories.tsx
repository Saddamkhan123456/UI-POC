import React from 'react';
import List from './List';
import ListComponent from './List';

export default {
  title: 'Component/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const ListStories = () => {
  return <ListComponent />;
};

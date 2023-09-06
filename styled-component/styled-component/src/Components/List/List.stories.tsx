import React from 'react';
import List from './List';

export default {
  title: 'Component/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const items = [
  { text: 'hard problem', kind: 'hard-problem', type: 'hard-problem' },
  { text: 'BLOGS & TL ARTICLES', kind: 'blogs', type: 'blog' },
  { text: 'Apache Kafka', kind: 'library-books', type: '' },
];

export const ListStories = () => {
  return <List items={items} />;
};

import Breadcrumb from './Breadcrumb';
import React from 'react';
import BreadcrumbTypeTwo from './BreadcrumbTwo';
export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
  //   tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => {
  const breadcrumbItems = ['Home', 'Trending'];
  return <Breadcrumb items={breadcrumbItems} />;
};

export const BreadcrumbTwo = () => {
  const items = [
    { text: 'hard problem', kind: 'hard-problem', type: 'hard-problem' },
    { text: 'BLOGS & TL ARTICLES', kind: 'blogs', type: 'blog' },
    { text: 'Apache Kafka', kind: 'library-books', type: '' },
  ];
  return <BreadcrumbTypeTwo items={items} />;
};

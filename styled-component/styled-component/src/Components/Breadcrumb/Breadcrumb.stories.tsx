import Breadcrumb from './Breadcrumb';
import React from 'react';
import BreadcrumbCustom from './BreadcrumbCustom';
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
  return (
    <BreadcrumbCustom
      articleTypeIcon={'hard-problem'}
      articleTypeText={'articleTypeText'}
      techTypeText={'techTypeText'}
      techTypeIcon={'library-books'}
      viewsIcon={'profile'}
      viewsText={'viewsText'}
      articleType={'hard-problem'}
    />
  );
};

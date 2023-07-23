import Breadcrumb from './Breadcrumb';
import React from 'react';
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
  return <Breadcrumb items={breadcrumbItems} active={false} />;
};

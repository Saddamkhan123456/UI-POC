import React from 'react';
import { BreadcrumbContainer, BreadcrumbItem, IBreadcrumb } from './styles';

const Breadcrumb = ({ items }: IBreadcrumb) => {
  return (
    <BreadcrumbContainer>
      {items.map((item: any, index: number) => (
        <BreadcrumbItem key={index} active={index === items.length - 1}>
          {item}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;

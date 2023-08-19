import React from 'react';
import { BreadcrumbContainer, BreadcrumbItem } from './styles';

interface IBreadcrumbProps {
  items: any[];
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item: any, index: number) => (
        <BreadcrumbItem key={index} active={index === items.length - 1} items={items}>
          {item}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;

import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { BreadcrumbTwoContainer, IBreadcrumbTwo, Text, BreadcrumbTwo } from './styles';

const BreadcrumbTypeTwo = ({ items }: IBreadcrumbTwo) => {
  return (
    <BreadcrumbTwoContainer>
      {items.map((item: any, index: number) => (
        <BreadcrumbTwo key={index} type={item.type} items={items}>
          <Icon kind={item.kind} width={20} height={20} />
          <Text type={item.type} items={items}>
            {item.text}
          </Text>
        </BreadcrumbTwo>
      ))}
    </BreadcrumbTwoContainer>
  );
};

export default BreadcrumbTypeTwo;

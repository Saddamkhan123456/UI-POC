import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { BreadcrumbTwoContainer, IBreadcrumbTwo, Text, BreadcrumbTwo } from './styles';

const BreadcrumbTypeTwo = ({ items }: IBreadcrumbTwo) => {
  return (
    <BreadcrumbTwoContainer>
      {items.map((item: any, index: number) => (
        <BreadcrumbTwo>
          <Icon kind={item.kind} width={20} height={20} />
          <Text type={item.type}>{item.text}</Text>
        </BreadcrumbTwo>
      ))}
    </BreadcrumbTwoContainer>
  );
};

export default BreadcrumbTypeTwo;

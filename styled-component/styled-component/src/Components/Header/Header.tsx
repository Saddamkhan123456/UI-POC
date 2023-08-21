import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Header, HeaderLeft, IHeader } from './styles';

const HeaderComponent = ({ isBreadcrumb }: IHeader) => {
  const breadcrumbItems = ['Home', 'Trending'];
  return (
    <Header>
      <HeaderLeft>
        <Icon kind='logo' width={72} height={50} />
        {isBreadcrumb && <Breadcrumb items={breadcrumbItems} />}
      </HeaderLeft>
      <div>search</div>
    </Header>
  );
};

export default HeaderComponent;

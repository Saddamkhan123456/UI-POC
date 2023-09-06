import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Header, HeaderLeft, IHeader } from './styles';
import SearchInput from '../Search-Input/SearchInput';

const HeaderComponent = ({ isBreadcrumb }: IHeader) => {
  const breadcrumbItems = ['Home', 'Bookmarked'];
  return (
    <Header>
      <HeaderLeft>
        <Icon kind='logo' width={72} height={50} />
        {isBreadcrumb && <Breadcrumb items={breadcrumbItems} />}
      </HeaderLeft>
      <div>
        <SearchInput isIcon={true} />
      </div>
    </Header>
  );
};

export default HeaderComponent;

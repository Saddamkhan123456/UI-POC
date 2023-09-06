import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Header, HeaderLeft, IHeader } from './styles';
import SearchInput from '../Search-Input/SearchInput';
import { Link, useLocation } from 'react-router-dom';

const HeaderComponent = ({ isBreadcrumb }: IHeader) => {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  const breadcrumbItems = ['Home', ...pathname];
  return (
    <Header>
      <HeaderLeft>
        <Link to='/'>
          <Icon kind='logo' width={72} height={50} />
        </Link>
        {isBreadcrumb && <Breadcrumb items={breadcrumbItems} />}
      </HeaderLeft>
      <div>{isBreadcrumb && <SearchInput isIcon={true} />}</div>
    </Header>
  );
};

export default HeaderComponent;

import React from 'react';
import HeaderComponent from '../Components/Header/Header';
import { Container, GlobalPageStyle } from './GlobalStyles';

interface ILayout {
  Children: any;
  isBreadcrumbVisible: boolean;
}
const Layout = ({ Children, isBreadcrumbVisible }: ILayout) => {
  return (
    <GlobalPageStyle>
      <HeaderComponent isBreadcrumb={isBreadcrumbVisible} />
      <Container>{Children}</Container>
    </GlobalPageStyle>
  );
};

export default Layout;

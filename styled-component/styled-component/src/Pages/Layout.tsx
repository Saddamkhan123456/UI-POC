import React, { Children } from 'react';
import HeaderComponent from '../Components/Header/Header';
import { Container, GlobalPageStyle } from './GlobalStyles';

interface ILayout {
  Children: any;
}
const Layout = ({ Children }: ILayout) => {
  return (
    <GlobalPageStyle>
      <HeaderComponent />
      <Container>{Children}</Container>
    </GlobalPageStyle>
  );
};

export default Layout;

import React from 'react';
import Header from '../Header';
import SideMenu from '../SideMenu/SideMenu';
import { PageBody, StyledLayout } from './Layout.styled';

function Layout(props) {
  return (
    <StyledLayout>
      <Header />
      <SideMenu />
      <PageBody>{props.children}</PageBody>
    </StyledLayout>
  );
}

export default Layout;

import React, { ReactNode } from 'react';
import { MAIN } from '../../constants/menus';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Logo from '../Logo';
import Main from '../Main';
import Navigation from '../Navigation';
import { layout } from './style.module.css';

export interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className={layout}>
      <Header>
        <Logo>shopifyShop.name</Logo>
        <Navigation inline routes={MAIN} />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid>
          <p>© copyright</p>
        </Grid>
      </Footer>
    </div>
  );
}

export default Layout;

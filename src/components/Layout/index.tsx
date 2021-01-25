import { WindowLocation } from '@reach/router';
import React, { FC } from 'react';
import { FOOTER, MAIN } from '../../constants/menus';
import { useShopifyShop } from '../../hooks/shop';
import Breadcrumb from '../Breadcrumb';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Logo from '../Logo';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

export interface LayoutProps {
  location: WindowLocation<WindowLocation['state']>;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, location } = props;
  const { shopifyShop } = useShopifyShop();

  const segments = location.pathname.split('/').filter((segment) => segment);
  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;

    return {
      name: segment,
      path,
    };
  });

  return (
    <div className={styles.layout}>
      <Header>
        <Logo>{shopifyShop.name}</Logo>
        <Navigation inline routes={MAIN} />
      </Header>
      <Main>
        <Grid>
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </Grid>
        {children}
      </Main>
      <Footer>
        <Grid>
          <Navigation routes={FOOTER} />
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;

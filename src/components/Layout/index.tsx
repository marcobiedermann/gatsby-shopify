import React, { FC } from 'react';
import { FOOTER, MAIN } from '../../constants/menus';
import { useShopifyShop } from '../../hooks/shop';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Logo from '../Logo';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

export interface LayoutProps {
  shopifyShop: {
    name: string
  }
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, shopifyShop, } = props;

  return (
    <div className={styles.layout}>
      <Header>
        <Logo>{shopifyShop.name}</Logo>
        <Navigation inline routes={MAIN} />
      </Header>
      <Main>
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

export default () => {
  const { shopifyShop } = useShopifyShop();

  return (
    <Layout shopifyShop={shopifyShop} />
  )
};

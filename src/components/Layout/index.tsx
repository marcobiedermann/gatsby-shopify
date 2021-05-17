import React, { FC } from 'react';
import { FOOTER, MAIN } from '../../constants/menus';
import { useShopifyShop } from '../../hooks/shop';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Logo from '../Logo';
import Main from '../Main';
import Navigation from '../Navigation';
import * as styles from './style.module.css';

const Layout: FC = (props) => {
  const { children } = props;
  const { shopifyShop } = useShopifyShop();

  return (
    <div className={styles.layout}>
      <Header>
        <Logo>{shopifyShop.name}</Logo>
        <Navigation inline routes={MAIN} />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid>
          <Navigation routes={FOOTER} />
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;

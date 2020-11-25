import { WindowLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import {
  COLLECTIONS,
  PRIVACY_POLICY,
  PRODUCTS,
  REFUND_POLICY,
  TERMS_OF_SERVICE,
} from '../../constants/routes';
import Breadcrumb from '../Breadcrumb';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

export interface LayoutProps {
  location: WindowLocation<WindowLocation['state']>;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, location } = props;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
        <h1>{data.site.siteMetadata.title}</h1>
        <Navigation routes={[COLLECTIONS, PRODUCTS]} />
      </Header>
      <Main>
        <Grid>
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </Grid>
        {children}
      </Main>
      <Footer>
        <Grid>
          <Navigation routes={[PRIVACY_POLICY, REFUND_POLICY, TERMS_OF_SERVICE]} />
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;

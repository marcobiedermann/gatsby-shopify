import { Link, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SecondPage: FC<PageProps> = (props) => {
  const { location } = props;

  return (
    <Layout location={location}>
      <SEO title="Page two" />
      <Grid>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2 ({props.path})</p>
        <Link to="/">Go back to the homepage</Link>
      </Grid>
    </Layout>
  );
};

export default SecondPage;

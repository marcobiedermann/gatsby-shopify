import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import SEO from '../components/SEO';

interface IndexPageProps extends PageProps {}

function IndexPage(_props: IndexPageProps) {
  return (
    <>
      <SEO title="Home" />
      <Grid>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Grid>
    </>
  );
}

export default IndexPage;

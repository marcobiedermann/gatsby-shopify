import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import SEO from '../components/SEO';

interface NotFountPageProps extends PageProps {}

function NotFoundPage(_props: NotFountPageProps) {
  return (
    <>
      <SEO title="404: Not found" />
      <Grid>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Grid>
    </>
  );
}

export default NotFoundPage;

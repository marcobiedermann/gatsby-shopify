import { Link, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <SEO title="Home" />
      <Grid>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Grid>
    </>
  );
};

export default IndexPage;

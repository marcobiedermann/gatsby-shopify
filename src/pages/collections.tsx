import { Link, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { useAllShopifyCollection } from '../hooks/collection';

const CollectionsPage: FC<PageProps> = (props) => {
  const { location } = props;
  const { allShopifyCollection } = useAllShopifyCollection();

  return (
    <Layout location={location}>
      <Grid>
        <h1>Collections</h1>
        <ul>
          {allShopifyCollection.edges.map(({ node }) => {
            const { description, handle, image, title, shopifyId } = node;

            return (
              <li key={shopifyId}>
                <h3>
                  <Link to={`/collections/${handle}`}>{title}</Link>
                </h3>
                <Image src={image.src} alt={title} />
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </Grid>
    </Layout>
  );
};

export default CollectionsPage;

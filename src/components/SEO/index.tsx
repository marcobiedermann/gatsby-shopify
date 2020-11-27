import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useSite } from '../../hooks/site';

export interface Meta {
  content: string;
  name: string;
}

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

const SEO: FC<SEOProps> = (props) => {
  const { description, lang = 'en', meta = [], title } = props;
  const { site } = useSite();

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;

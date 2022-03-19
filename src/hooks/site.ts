import { graphql, useStaticQuery } from 'gatsby';

interface SiteQuery {
  site: {
    siteMetadata: {
      author: string;
      description: string;
      title: string;
    };
  };
}

function useSite() {
  return useStaticQuery<SiteQuery>(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
}

export { useSite };

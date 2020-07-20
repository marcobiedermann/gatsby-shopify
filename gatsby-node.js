const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allShopifyArticle(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            blog {
              handle
            }
            handle
            publishedAt
            shopifyId
            title
          }
        }
      }
      allShopifyBlog(sort: { fields: title }) {
        edges {
          node {
            handle
            shopifyId
            title
          }
        }
      }
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            title
            shopifyId
            handle
            description
          }
        }
      }
      allShopifyPage(sort: { fields: [title] }) {
        edges {
          node {
            body
            handle
            shopifyId
            title
          }
        }
      }
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            availableForSale
            description
            handle
            images {
              id
              originalSrc
            }
            options {
              shopifyId
              name
              values
            }
            priceRange {
              minVariantPrice {
                amount
              }
              maxVariantPrice {
                amount
              }
            }
            shopifyId
            title
          }
        }
      }
      allShopifyShopPolicy {
        edges {
          node {
            body
            handle
            title
          }
        }
      }
    }
  `)

  result.data.allShopifyArticle.edges.forEach(({ node }) => {
    const { handle, shopifyId } = node

    createPage({
      path: `/blogs/${node.blog.handle}/${handle}`,
      component: path.resolve(`./src/templates/Article/index.tsx`),
      context: {
        shopifyId,
      },
    })
  })

  result.data.allShopifyBlog.edges.forEach(({ node }) => {
    const { handle, shopifyId } = node

    createPage({
      path: `/blogs/${handle}`,
      component: path.resolve(`./src/templates/Blog/index.tsx`),
      context: {
        shopifyId,
      },
    })
  })

  result.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/collections/${node.handle}`,
      component: path.resolve(`./src/templates/Collection/index.tsx`),
      context: {
        collection: node,
        title: node.title,
      },
    })
  })

  result.data.allShopifyPage.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.handle}`,
      component: path.resolve(`./src/templates/Page/index.tsx`),
      context: {
        page: node,
      },
    })
  })

  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/Product/index.tsx`),
      context: {
        product: node,
      },
    })
  })

  result.data.allShopifyShopPolicy.edges.forEach(({ node }) => {
    createPage({
      path: `/policies/${node.handle}`,
      component: path.resolve(`./src/templates/Page/index.tsx`),
      context: {
        page: node,
      },
    })
  })
}

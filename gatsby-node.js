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
            shopifyId
          }
        }
      }
      allShopifyBlog(sort: { fields: title }) {
        edges {
          node {
            handle
            shopifyId
          }
        }
      }
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            handle
            shopifyId
          }
        }
      }
      allShopifyPage(sort: { fields: [title] }) {
        edges {
          node {
            handle
            shopifyId
          }
        }
      }
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            handle
            shopifyId
          }
        }
      }
      allShopifyShopPolicy {
        edges {
          node {
            handle
            shopifyId
          }
        }
      }
    }
  `)

  result.data.allShopifyArticle.edges.forEach(({ node }) => {
    const { blog, handle, shopifyId } = node

    createPage({
      path: `/blogs/${blog.handle}/${handle}`,
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
    const { handle, shopifyId } = node

    createPage({
      path: `/collections/${handle}`,
      component: path.resolve(`./src/templates/Collection/index.tsx`),
      context: {
        shopifyId,
      },
    })
  })

  result.data.allShopifyPage.edges.forEach(({ node }) => {
    const { handle, shopifyId } = node

    createPage({
      path: `/${handle}`,
      component: path.resolve(`./src/templates/Page/index.tsx`),
      context: {
        shopifyId,
      },
    })
  })

  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    const { handle, shopifyId } = node

    createPage({
      path: `/products/${handle}`,
      component: path.resolve(`./src/templates/Product/index.tsx`),
      context: {
        shopifyId,
      },
    })
  })

  result.data.allShopifyShopPolicy.edges.forEach(({ node }) => {
    const { handle, shopifyId } = node

    createPage({
      path: `/policies/${handle}`,
      component: path.resolve(`./src/templates/Page/index.tsx`),
      context: {
        shopifyId,
      },
    })
  })
}

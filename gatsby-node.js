const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
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
    }
  `)

  result.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/collections/${node.handle}`,
      component: path.resolve(`./src/templates/collection.tsx`),
      context: {
        collection: node,
        title: node.title,
      },
    })
  })

  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        product: node,
      },
    })
  })
}

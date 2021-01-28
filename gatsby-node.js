const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsNyheter {
          edges {
            node {
              nyheterSlug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => {
        createPage({
          path: `/blogg/${nyheter.nyheterSlug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: nyheter.nyheterSlug,
          },
        })
      })
      resolve()
    })
  })
}

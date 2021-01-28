import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import ArticlePreview from "../components/ArticlesPreview/ArticlesPreview"
export default function PostArchive({ data }) {
  return (
    <Layout>
      <h1 className="bigSectionTitle bigSectionTitle__centered">Blogg</h1>
      <ArticlePreview post={data.allDatoCmsNyheter} />
    </Layout>
  )
}

export const query = graphql`
  query nyheterQueryPage {
    allDatoCmsNyheter {
      edges {
        node {
          nyheterTitle
          nyheterSlug
          nyheterExcerpt
          meta {
          firstPublishedAt(fromNow: true)
          }
          nyheterCoverimage {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              src
            }
          }
        }
      }
    }
  }
`

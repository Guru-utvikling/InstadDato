import React from "react"

import LeftPanelLayout from "../components/left-panle-layout"
import { graphql } from "gatsby"
import ArticlePreview from "../components/ArticlesPreview/ArticlesPreview"
export default function PostArchive({ data }) {
  return (
    <>
      
      <h1 style={{padding:'0 7rem'}} className="bigSectionTitle">Blogg</h1>
      <ArticlePreview post={data.allDatoCmsNyheter} />
    </>
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
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
      edges {
        node {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

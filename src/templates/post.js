import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import LeftPanelLayout from "../components/left-panle-layout"

export default ({ data }) => (
  <LeftPanelLayout backgroundImage="https://www.datocms-assets.com/41475/1617702815-first-section-bg.png">

    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsNyheter.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsNyheter.nyheterTitle}</h1>
        <Img fluid={data.datoCmsNyheter.nyheterCoverimage.fluid} />
        <p className="sheet__lead">{data.datoCmsNyheter.nyheterExcerpt}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsNyheter.nyheterContentNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__gallery">

        </div>
      </div>
    </article>
  </LeftPanelLayout>
)
export const query = graphql`
  query NyheterQuery( $slug: String! ) {


    datoCmsNyheter( nyheterSlug: {eq: $slug}) {
      nyheterTitle
      nyheterExcerpt
      nyheterContentNode {
        childMarkdownRemark {
            html
          }
        }
      
        nyheterCoverimage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
    }
  }
`

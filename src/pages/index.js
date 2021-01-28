import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import FirstSection from "../components/FirstSection/FirstSection"
import SecondSection from "../components/SecondSection/SecondSection"
import ThirdSection from "../components/ThirdSection/ThirdSection"
import NewsletterSection from "../components/NewsletterSection/NewsletterSection"
import BoxesSection from "../components/BoxesSection/BoxesSection"
import ArticlePreview from "../components/ArticlesPreview/ArticlesPreview"
import RegisterCvCTA from "../components/RegisterCv_CTA/RegisterCvCTA"

const IndexPage = ({ data }) => (
  <Layout>
    <FirstSection data={data.allDatoCmsAsset} />
    <SecondSection />
    <ThirdSection />
    <NewsletterSection />
    <BoxesSection boxData={data.allDatoCmsServiceBox} />
    <RegisterCvCTA />
    <h2 className='bigSectionTitle bigSectionTitle__left'>Se de siste innleggene</h2>
    <ArticlePreview post={data.allDatoCmsNyheter} />

    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <Link className='see_all__btn' to='/blogg'>
        Se alle innlegg
      </Link>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query queryIndexPage {
    allDatoCmsNyheter(limit: 4) {
      edges {
        node {
          nyheterTitle
          nyheterSlug
          nyheterExcerpt
          nyheterCoverimage {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              src
            }
          }
          meta {
          firstPublishedAt(fromNow: true)
        }
        }
      }
    }
    allDatoCmsServiceBox {
      edges {
        node {
          id
          shortDescription
          title
          icon {
            url
          }
        }
      }
    }
    allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
      edges {
        node {
          fluid {
            src
          }
        }
      }
    }
  }
`

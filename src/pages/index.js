import React from "react"
import { Link, graphql } from "gatsby"
import MainSection from "../components/MainSection/MainSection"
import SecondSection from "../components/SecondSection/SecondSection"
import ThirdSection from "../components/ThirdSection/ThirdSection"
import NewsletterSection from "../components/NewsletterSection/NewsletterSection"
import BoxesSection from "../components/BoxesSection/BoxesSection"
import ArticlePreview from "../components/ArticlesPreview/ArticlesPreview"
import RegisterCvCTA from "../components/RegisterCv_CTA/RegisterCvCTA"
import LeftPanelLayout from "../components/left-panle-layout"

const IndexPage = ({ data }) => (
  <LeftPanelLayout backgroundImage={data.allDatoCmsAsset}>
    <MainSection />
    <SecondSection />
    <ThirdSection />
    <NewsletterSection />
    <BoxesSection boxData={data.allDatoCmsServiceBox} />
    <RegisterCvCTA />
    <div >
      <h2
        style={{ color: "#fff" }}
        className='bigSectionTitle bigSectionTitle__left'
      >
        Se de siste innleggene
      </h2>
      <ArticlePreview post={data.allDatoCmsNyheter} />

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <Link className='see_all__btn' to='/blogg'>
          Se alle innlegg
        </Link>
      </div>
    </div>
  </LeftPanelLayout>
)

export default IndexPage

export const query = graphql`
  query queryIndexPage {
    allDatoCmsNyheter(limit: 3) {
      edges {
        node {
          nyheterTitle
          nyheterSlug
          nyheterExcerpt
          nyheterCoverimage {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
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
            alt
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

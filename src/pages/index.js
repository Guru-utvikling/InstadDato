import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import FirstSection from "../components/FirstSection/FirstSection"
import SecondSection from "../components/SecondSection/SecondSection"
import ThirdSection from "../components/ThirdSection/ThirdSection"
import NewsletterSection from "../components/NewsletterSection/NewsletterSection"
import BoxesSection from "../components/BoxesSection/BoxesSection"
const IndexPage = ({ data }) => (
  <Layout>
    <FirstSection data={data.allDatoCmsAsset}/>
    <SecondSection />
    <ThirdSection />
    <NewsletterSection />
    <BoxesSection boxData ={data.allDatoCmsServiceBox}/>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query queryIndexPage {
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
    allDatoCmsAsset {
      edges {
        node {
          fluid{
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

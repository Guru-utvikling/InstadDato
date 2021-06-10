import React from "react"
import LeftPanelLayout from "../components/left-panle-layout"
import Image from "gatsby-image"
import Grid from "@material-ui/core"
const Tjenester = ({ data }) => {
  return (
    <LeftPanelLayout backgroundImage={data.bg}>
      <div className='tjenester__container'>
        <div className='tjenester__content'>
          <h6 className='smallSectionSubTitle'>VÅRE TJENESTER</h6>
          <h2 style={{ color: "#fff" }} className='bigSectionTitle'>
            {data.allDatoCmsContent.edges[0].node.tjenesterSubpageHeading}
          </h2>
          <p style={{ color: "#fff" }} className='paraSection'>
            {data.allDatoCmsContent.edges[0].node.tjenesterSubpageParagraph}
          </p>
        </div>
        <div className='image__wrapper'>
          <Image
            width='100%'
            height='100%'
            fluid={data.allDatoCmsContent.edges[0].node.tjenesterSubpageImage.fluid}
          />
        </div>
      </div>
    </LeftPanelLayout>
  )
}

export default Tjenester

export const query = graphql`
  query queryOmOssPage {
    allDatoCmsContent {
      edges {
        node {
          tjenesterSubpageHeading
          tjenesterSubpageParagraph
          tjenesterSubpageImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    bg: allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
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

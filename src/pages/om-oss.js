import React from "react"
import Grid from "@material-ui/core/Grid"
import Image from "gatsby-image"
import LeftPanelLayout from "../components/left-panle-layout"
const OmOss = ({ data }) => {
  return (
    <LeftPanelLayout backgroundImage={data.bg}>
      <div className='om-oss-container'>
        <Grid
          container
          item
          lg={6}
          xs={12}
          className='om-oss-container__content'
        >
          <h1 className='bigSectionTitle'>Om oss</h1>
          <p className='om-oss-container__content--para'>
            Instad AS ble startet i desember 2019, av Bjarne Jakobsen og Trond
            Erik Stølås. Begge har lang erfaring i bransjen, og målet er å gjøre
            ting enkelt. Enkelt for kunde og samarbeidspartnere, og enkelt for
            våre kandidater/medarbeidere med å bruke det nyeste av teknologiske
            løsninger. Samtidig ønsker vi å skape en lokal forankring i
            bedriften vår. Vi skal være det foretrukne bemanningsselskapet på
            Vestlandet.
          </p>
        </Grid>
        <Grid lg={6} container item className='om-oss-container__images'>
          <Image
            className='om-oss-container__images--img'
            fluid={
              data.allDatoCmsContent.edges[0].node.omOssSubpageFirstImage.fluid
            }
          />
          <Image
            className='om-oss-container__images--img'
            fluid={
              data.allDatoCmsContent.edges[0].node.omOssSubpageSecondImage.fluid
                
            }
          />
        </Grid>
      </div>
    </LeftPanelLayout>
  )
}

export default OmOss

export const query = graphql`
  query omOssQuery {
    allDatoCmsContent {
      edges {
        node {
          omOssSubpageParagraph
          omOssSubpageFirstImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          omOssSubpageSecondImage {
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

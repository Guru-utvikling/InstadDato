import React from "react"
import LeftPanelLayout from "../components/left-panle-layout"
import Image from "gatsby-image"
import Grid from "@material-ui/core"
const Tjenester = ({ data }) => {
  return (
    <LeftPanelLayout backgroundImage={data.bg}>
      <div className='tjenester__container'>
        <div className='tjenester__content' >
          <h6 className='smallSectionSubTitle'>VARE TJENESTER</h6>
          <h2 style={{ color: "#fff" }} className='bigSectionTitle'>
            Bygg, Anlegg, Installasjon og Industri
          </h2>
          <p style={{ color: "#fff" }} className='paraSection'>
            Vi kjenner markedet og mulighetene innen fagene. Vi samarbeider med
            mange både små og store kunder, både lokalt og nasjonalt . Vi har et
            bredt spekter av kandidater og ledige stillinger innenfor de
            forskjellige yrkesområdene. Vi har bransjefolk med lang erfaring og
            våre medarbeidere innehar høy kompetanse. Det viktigste for oss er
            våre medarbeidere.
          </p>
        </div>
        <div className="image__wrapper">
          <Image width="100%" height="100%" fluid={data.first.edges[0].node.fluid} />
        </div>
      </div>
    </LeftPanelLayout>
  )
}

export default Tjenester

export const query = graphql`
  query queryOmOssPage {
    bg: allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
      edges {
        node {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    first: allDatoCmsAsset(
      filter: { filename: { eq: "tjenester-image.jpg" } }
    ) {
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

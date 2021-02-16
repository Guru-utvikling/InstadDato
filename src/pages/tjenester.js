import React from "react"
import LeftPanelLayout from "../components/left-panle-layout"
const Tjenester = ({data}) => {
  return (
    <LeftPanelLayout backgroundImage={data.allDatoCmsAsset}>
      <div style={{ height: "100vh" }}>
        <h1 className='bigSectionTitle bigSectionTitle__centered'>
          Sorry, nothing to see anything yet
        </h1>
      </div>
    </LeftPanelLayout>
  )
}

export default Tjenester

export const query = graphql`
  query queryOmOssPage {
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
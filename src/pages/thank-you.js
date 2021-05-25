import React from "react"
import LeftPanelLayout from "../components/left-panle-layout"

 const ThankYou = ({ data }) => {
  return (
    <LeftPanelLayout backgroundImage={data.bg}>
      <div style={{ margin:'5rem 0rem'}} className='ledige_stillinger_main_container'>
      <h1  className='bigSectionTitle'>Takk!</h1>
      <p style={{color:"#fff", textAlign:'center'}}>
        Vi setter pris på at du har tatt deg tid til å skrive oss. Vi kommer
        snart tilbake. Kom tilbake og se oss ofte.
      </p>
      </div>

    </LeftPanelLayout>
  )
}
export default ThankYou

export const query = graphql`
  query thankyou {
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
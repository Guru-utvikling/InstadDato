import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import LeftPanelLayout from "../components/left-panle-layout"
const Ansatte = ({ data }) => {
  return (
    <LeftPanelLayout backgroundImage={data.allDatoCmsAsset}>
      <div className='ansatte__container'>
        <h1 className='bigSectionTitle bigSectionTitle__centered'>Ansatte</h1>
        <div className="ansatte__container--wrapper">
          {data.allDatoCmsAnsatte.edges.map(({ node: ansatte }) => {
            return (
              <div className='ansatte__content--wrapper'>
                <Img className="ansatte__image" fixed={ansatte.ansatteimage.fixed} />
                <h3>{ansatte.ansattename}</h3>
                <p style={{ color: "$main", marginTop: "1rem" }}>
                  <span>E-post: </span>
                  <Link to={`mailto:${ansatte.ansatteemail}`}>
                    {ansatte.ansatteemail}
                  </Link>
                </p>
                <p>
                  <span>Telefon: </span>
                  <Link to={`mailto:${ansatte.ansattephone}`}>
                    {ansatte.ansattephone}
                  </Link>
                </p>
                <p>{ansatte.ansattedescription}</p>
              </div>
            )
          })}
        </div>
      </div>
    </LeftPanelLayout>
  )
}

export default Ansatte

export const query = graphql`
  query ansatteQuery {
    allDatoCmsAnsatte {
      edges {
        node {
          ansattedescription
          ansattename
          ansattephone
          ansatteemail
          ansatteimage {
            fixed {
              ...GatsbyDatoCmsFixed
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

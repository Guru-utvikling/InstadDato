import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby'
const FirstSection = (props) => {
  return (
    <div
      className='firstSection__container'
      style={{
        background: `url(https://www.datocms-assets.com/41475/1611583917-first-section-bg.png?auto=format)`,
      }}
    >
      <div className='firstSection__content--wrapper'>
        <h1 className='firstSection__title'>Your business is our business</h1>
        <p className='firstSection__para'>
          Instad AS is a staffing and recruitment company established in
          December 2019 and headquartered in the center of Bergen, Norway. We
          provide experienced industry professionals for a wide variety of
          commercial and private projects.
        </p>
        <div className='CTA__button--wrapper'>
          <Button disableRipple>
            <Link
              style={{ backgroundColor: "#feda01" }}
              className='CTA__button'
            >
              See all jobs
            </Link>
          </Button>
          <Button disableRipple>
            <Link style={{ backgroundColor: "#fff" }} className='CTA__button'>
              Om oss
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
/*      query {
        datoCmsAsset(filename: { eq: "first-section-bg.png" }) {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }*/

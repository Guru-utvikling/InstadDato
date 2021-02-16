import React, { useEffect, useState} from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby"
import Slide from "@material-ui/core/Slide"
import Hidden from "@material-ui/core/Hidden"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import BackgroundImage from "gatsby-background-image"
import Menu from "../Menu/Menu"
const FirstSection = (props) => {
 const [ resize, setResize] = useState()

 useEffect(
  () => {
    if( typeof window !==`undefined`){
      window.addEventListener('resize', updateSize);
      setResize(window.innerWidth)
    }
  },
  [],
);
  const updateSize = () =>{
    if( typeof window !==`undefined`){
      setResize(window.innerWidth)
      console.log(resize)
    }
  }


  return (
    <div className='firstSection__main__container'>

      <BackgroundImage fluid={props.backgroundImage.edges[0].node.fluid}>
        { resize >= 899 ? <Menu color="#fff"/> : ''}
        <div className='firstSection__container'>
          <Slide in direction='right' timeout={300}>
            <div className='firstSection__content--wrapper'>
              <p className='firstSection__para'>
                Instad AS is a staffing and recruitment company established in
                December 2019 and headquartered in the center of Bergen, Norway.
                We provide experienced industry professionals for a wide variety
                of commercial and private projects.
              </p>
              <p className='firstSection__para' >
                We are a staffing company that is specialized in the areas of
                building and industrial construction and installation. The
                company invests in the best and latest innovative technological
                solutions available on the market to make things easier and less
                complicated, for both our employees and customers.
              </p>
              <div className='CTA__button--wrapper'>
                <Button disableRipple>
                  <Link
                    to={"/ledige-stillinger"}
                    style={{ backgroundColor: "#feda01" }}
                    className='CTA__button'
                  >
                    Ledige stillinger
                  </Link>
                </Button>
                <Button disableRipple>
                  <Link
                    to={"/om-oss"}
                    style={{ backgroundColor: "#fff" }}
                    className='CTA__button'
                  >
                    Om oss
                  </Link>
                </Button>
              </div>
            </div>
          </Slide>
        </div>
      </BackgroundImage>
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

import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Slide from "@material-ui/core/Slide"

import Menu from "../Menu/Menu"

const MainSection = (props) => {
  const [resize, setResize] = useState()

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", updateSize)
      setResize(window.innerWidth)
    }
  }, [])
  const updateSize = () => {
    if (typeof window !== `undefined`) {
      setResize(window.innerWidth)
    }
  }

  return (
    <div className='mainSection__main__container'>
      <div>
        <div className='mainSection__container'>
          <Slide in direction='right' timeout={300}>
            <div className='mainSection__content--wrapper'>
              <p className='mainSection__para'>
                {props.content.edges[0].node.firstParagraph}
              </p>
              <p className='mainSection__para'>
                {props.content.edges[0].node.secondParagraph}
              </p>
              <div>
                <a
                  href={"https://instad.recman.no/register.php"}
                  style={{ backgroundColor: "#feda01" }}
                  className='main_section__CTA__button'
                >
                  REGISTER YOUR CV
                </a>
                <a
                  href='mailto:soknad.bgo@instad.no'
                  style={{ backgroundColor: "#fff" }}
                  className='main_section__CTA__button'
                >
                  PROJECT INQUIRIES
                </a>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default MainSection
/*      query {
        datoCmsAsset(filename: { eq: "first-section-bg.png" }) {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }*/

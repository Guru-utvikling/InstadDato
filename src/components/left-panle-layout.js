/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react"
import { Link } from "gatsby"
import "../styles/index.sass"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import BackgroundImage from "gatsby-background-image"
import Menu from "../components/Menu/Menu"
const LeftPanelLayout = (props) => {
  return (
    <>
      <div className='layout__container'>
        <div className='layout__container--panel'>
          <div className='firstSection__sidebar'>
            <Link to="/">
              <img
                alt='Instad Logo'
                src='https://www.datocms-assets.com/41475/1611574344-instad-logo.png'
              />
            </Link>
            <ul className='firstSection__sidebar--list'>
              <li>Halfdan Kjerulfsgate 4</li>
              <li>5017 Bergen</li>
              <li>
                <Link to='tel:+47 994 00 900'>+47 994 00 900</Link>
              </li>
              <li>
                <a to='https://www.linkedin.com/company/instad/'>
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='layout__container--content'>
          <BackgroundImage fluid={props.backgroundImage.edges[0].node.fluid}>
            <Menu color='#fff' />
            <main className='main_container'>{props.children}</main>
          </BackgroundImage>
        </div>
      </div>
    </>
  )
}

export default LeftPanelLayout
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

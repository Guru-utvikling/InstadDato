/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Header from "../components/Header/Header"
import "../styles/index.sass"
import Footer from "./Footer/Footer"
import { Fade } from "@material-ui/core"
import Menu from "../components/Menu/Menu"
import Grid from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import BackgroundImage from "gatsby-background-image"
const LeftPanelLayout = (props) => {
  return (
    <>
      <div className='layout__container'>
        <div className='layout__container--panel'>
          <div className='firstSection__sidebar'>
            <img src='https://www.datocms-assets.com/41475/1611574344-instad-logo.png' />
            <ul className='firstSection__sidebar--list'>
              <li>Halfdan Kjerulfsgate 4</li>
              <li>5017 Bergen</li>
              <li>
                <Link to='tel:+47 994 00 900'>+47 994 00 900</Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/company/instad/'>
                  <LinkedInIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='layout__container--content'>
          <BackgroundImage fluid={props.backgroundImage.edges[0].node.fluid} >
            <main className='main_container'>{props.children}</main>
          </BackgroundImage>
        </div>
      </div>
    </>
  )
}

export default LeftPanelLayout
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

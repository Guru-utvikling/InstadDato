/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Header from "../components/Header/Header"
import "../styles/index.sass"
import Footer from "./Footer/Footer"
import { Fade } from "@material-ui/core"

const Layout = ({ children }) => {

  let currentURL = ''

  if (typeof window !== `undefined`) {
     currentURL = window.location.pathname
  }

  return (
    <>
      {currentURL === "/" ? "" : <Header />}
      <Fade in timeout={500}>
        <main className='main_container'>{children}</main>
      </Fade>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

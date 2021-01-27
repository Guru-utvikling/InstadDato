/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Header from "../components/Header/Header"
import Fade from "@material-ui/core/Fade"
import '../styles/index.sass'
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main_container">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

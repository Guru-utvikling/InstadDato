/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../components/Header/Header"
import "../styles/index.sass"
import Footer from "./Footer/Footer"
import { Fade } from "@material-ui/core"

const Layout = ({ children }) => {
  const [resize, setResize] = useState()

  let currentURL = ""

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setResize(window.innerWidth)
      window.addEventListener("resize", updateSize)
    }
  }, [])
  const updateSize = () => {
    if (typeof window !== `undefined`) {
      setResize(window.innerWidth)
    }
  }

  if (typeof window !== `undefined`) {
    currentURL = window.location.pathname
  }

  const renderMenu = () => {
    if (currentURL === "/" && resize >= 899) {
      return ""
    } else if ((currentURL === "/" && resize <= 899) || currentURL !== "/") {
      return <Header />
    }
  }
  return (
    <>
      {renderMenu()}
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

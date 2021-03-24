/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react"
import { Link } from "gatsby"
import "../styles/index.sass"
import BackgroundImage from "gatsby-background-image"
import Menu from "../components/Menu/Menu"
import Footer from "../components/Footer/Footer"
import Hidden from "@material-ui/core/Hidden"
import MobileMenu from '../components/Menu/MobileMenu'
const LeftPanelLayout = (props) => {
  return (
    <>
      <div className='layout__container'>
        <Hidden mdUp>
          <MobileMenu/>
        </Hidden>
        <Hidden smDown>
          <div className='layout__container--panel'>
            <div className='firstSection__sidebar'>
              <div style={{ textAlign: "center" }}>
                <Link to='/'>
                  <img
                    style={{ margin: 0 }}
                    alt='Instad Logo'
                    src='https://www.datocms-assets.com/41475/1614251900-instad-logo2.png'
                  />
                </Link>
              </div>

              <ul className='firstSection__sidebar--list'>
                <li>Halfdan Kjerulfsgate 4</li>
                <li>5017 Bergen</li>
                <li>
                  <Link to='tel:+47 994 00 900'>+47 994 00 900</Link>
                </li>
                <li>
                  <a href='https://www.linkedin.com/company/instad'>
                    <img
                      height='12px'
                      width='12px'
                      src='https://www.datocms-assets.com/41475/1614253597-linkedin.svg'
                    />
                  </a>
                  <a href="https://www.facebook.com/instad.no/" >
                    <img
                      height='12px'
                      width='12px'
                      src='https://www.datocms-assets.com/41475/1614258598-icon-awesome-facebook.png'
                    />
                  </a>
                  <a >
                    <img
                      height='12px'
                      width='12px'
                      src='https://www.datocms-assets.com/41475/1614258922-instagram.png'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Hidden>
        <span className='layout__container--content'>
          <BackgroundImage  className="main-background" fluid={props.backgroundImage.edges[0].node.fluid}>
            <Hidden smDown>
              <Menu color='#fff' />
            </Hidden>

            <main className='main_container'>
              {props.children} 
              <Footer/>
            </main>
          </BackgroundImage>
        </span>
      </div>
    </>
  )
}

export default LeftPanelLayout
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

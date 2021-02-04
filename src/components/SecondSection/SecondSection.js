import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "@material-ui/core/Fade"
import VizSensor from 'react-visibility-sensor'
const SecondSection = () => {
  let [active, setActive] = useState(false)
  return (

     
        <Grid className='secondSection__container' container>
          <Grid
            className='secondSection__image_wrapper'
            direction='row'
            container
            item
            lg={6}
          >
            <Grid
              className='secondSection__image_left--wrapper'
              xs={10}
              lg={6}
              item
            >
              <img src='https://www.datocms-assets.com/41475/1611652037-second-section-bg-1.jpg' />
            </Grid>
            <Grid
              className='secondSection__image_right--wrapper'
              xs={10}
              lg={6}
              item
            >
              <img src='https://www.datocms-assets.com/41475/1611652243-pexels-matthew-t-rader-5050860.jpg' />
            </Grid>
          </Grid>
            <Grid
              className='secondSection__content__container'
              justify='center'
              lg={6}
              item
            >
              <h6 className='smallSectionSubTitle'>VARE TJENESTER</h6>
              <h2 style={{ color: "#000" }} className='bigSectionTitle'>
                Bygg, Anlegg, Installasjon og Industri
              </h2>
              <p style={{ color: "#000" }} className='paraSection'>
                Vi kjenner markedet og mulighetene innen fagene. Vi samarbeider
                med mange både små og store kunder, både lokalt og nasjonalt. Vi
                har et bredt spekter av kandidater og ledige stillinger innenfor
                de forskjellige yrkesområdene. Vi har bransjefolk med lang
                erfaring og våre medarbeidere innehar høy kompetanse. Det
                viktigste for oss er våre medarbeidere.
              </p>
            </Grid>
        </Grid>
  )
}

export default SecondSection

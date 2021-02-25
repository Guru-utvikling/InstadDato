import React from "react"
import Grid from "@material-ui/core/Grid"
const SecondSection = () => {
  return (
    <Grid className='secondSection__container' container>
      <Grid className='secondSection__content__container' lg={6} item>
        <h6 className='smallSectionSubTitle'>VARE TJENESTER</h6>
        <h2 style={{ color: "#fff" }} className='bigSectionTitle'>
          Bygg, Anlegg, Installasjon og Industri
        </h2>
        <p style={{ color: "#fff" }} className='paraSection'>
          Vi kjenner markedet og mulighetene innen fagene. Vi samarbeider med
          mange både små og store kunder, både lokalt og nasjonalt. Vi har et
          bredt spekter av kandidater og ledige stillinger innenfor de
          forskjellige yrkesområdene. Vi har bransjefolk med lang erfaring og
          våre medarbeidere innehar høy kompetanse. Det viktigste for oss er
          våre medarbeidere.
        </p>
      </Grid>
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
          <img
            alt='excavator on site'
            src='https://www.datocms-assets.com/41475/1613570699-construction-site.jpg'
          />
        </Grid>
        <Grid
          className='secondSection__image_right--wrapper'
          xs={10}
          lg={6}
          item
        >
          <img
            alt='workers working'
            src='https://www.datocms-assets.com/41475/1613642190-om-oss-image-1.jpg'
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SecondSection

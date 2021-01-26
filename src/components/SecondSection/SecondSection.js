import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
const SecondSection = () => {
  return (
    <Grid className='secondSection__container' container>
      <Grid
        className='secondSection__image_wrapper'
        direction='row'
        container
        item
        lg={6}
      >
        <Grid className="secondSection__image_left--wrapper" xs={12} lg={6} item>
          <img src='https://www.datocms-assets.com/41475/1611652037-second-section-bg-1.jpg' />
        </Grid>
        <Grid className="secondSection__image_right--wrapper"  xs={12} lg={6} item>
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
        <h2 className='bigSectionTitle'>
          Bygg, Anlegg, Installasjon og Industri
        </h2>
        <p className='paraSection'>
          Vi kjenner markedet og mulighetene innen fagene. Vi samarbeider med
          mange både små og store kunder, både lokalt og nasjonalt. Vi har et
          bredt spekter av kandidater og ledige stillinger innenfor de
          forskjellige yrkesområdene. Vi har bransjefolk med lang erfaring og
          våre medarbeidere innehar høy kompetanse. Det viktigste for oss er
          våre medarbeidere.
        </p>
        <Button>
          <Link style={{ textAlign: 'start',backgroundColor: "#feda01" }} className='CTA__button'>
            Register your CV
          </Link>
        </Button>
      </Grid>
    </Grid>
  )
}

export default SecondSection

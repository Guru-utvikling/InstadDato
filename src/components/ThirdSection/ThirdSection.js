import React from "react"
import Grid from "@material-ui/core/Grid"
const ThirdSection = () => {
  return (
    <Grid
      direction='column'
      justify='center'
      alignItems='center'
      container
      className='thirdSection__container'
    >
      <h2 style={{ color:"#fff"}} className='bigSectionTitle'>Ledige stillinger</h2>
      <p style={{ color:"#fff"}} className='paraSection'>Finn en jobb der du er</p>
    </Grid>
  )
}

export default ThirdSection

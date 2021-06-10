import React from "react"
import Grid from "@material-ui/core/Grid"
import Image from 'gatsby-image'
const SecondSection = (props) => {
  return (
    <Grid className='secondSection__container' container>
      <Grid className='secondSection__content__container' lg={6} item>
        <h6 className='smallSectionSubTitle'>
          {props.content.edges[0].node.vareTjenesterSmallHeading}
        </h6>
        <h2 style={{ color: "#fff" }} className='bigSectionTitle'>
          {props.content.edges[0].node.vareTjenesterBigHeading}
        </h2>
        <p style={{ color: "#fff" }} className='paraSection'>
          {props.content.edges[0].node.vareTjenesterParagraph}
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
            height={227}
            alt='excavator on site'
            src={props.content.edges[0].node.vareTjenesterFirstImage.fluid.src}
          />
        </Grid>
        <Grid
          className='secondSection__image_right--wrapper'
          xs={10}
          lg={6}
          item
        >
          <img
            height={227}
            alt='workers working'
            src={props.content.edges[0].node.vareTjenesterSecondImage.fluid.src}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SecondSection

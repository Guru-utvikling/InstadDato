import React from "react"
import Grid from "@material-ui/core/Grid"

const BoxesSection = (props) => {
  return (
    <Grid className='service_box_main_container' direction="column" container>
      <Grid
        className='secondSection__content__container'
        justify='center'
        direction="column"
        lg={6}
        xs={12}
        md={12}
        item
        container
      >
        <h2 className='bigSectionTitle' style={{ color: "#fff" }}>
          {props.content.edges[0].node.omOssHeading}
        </h2>
        <p className='paraSection' style={{ color: "#fff" }}>
          {props.content.edges[0].node.omOssParagraph}
        </p>
      </Grid>
      <div
        className='service_box_container'
        container
        
        justify='flex-start'
        lg={12}
        xs={12}
        md={12}
        item
      >
        {props.boxData.edges.map(({ node: service_box }) => (
          <div key={service_box.id} className='service_box_wrapper'>
            <img
              height={40}
              alt={service_box.icon.alt}
              className='service_box_icon'
              src={service_box.icon.url}
            />
            <h2>{service_box.title}</h2>
            <p>{service_box.shortDescription}</p>
          </div>
        ))}
      </div>
    </Grid>
  )
}

export default BoxesSection

{
  /*
       
              <div className='service_box_wrapper'>
          <img
            className='service_box_icon'
            src='https://www.datocms-assets.com/41475/1612271557-tree-3052401280.png'
          />
          <h2>{props.boxData.edges[0].node.title}Jordnær</h2>
          <p>
            Vi ønsker langvarige relasjoner basert på en ukomplisert, ydmyk og
            troverdig tilnærming
          </p>
        </div>
        <div className='service_box_wrapper'>
          <img
            className='service_box_icon'
            src='https://www.datocms-assets.com/41475/1612271575-pnghutsafety-workplace-helmet-symbol.png'
          />
          <h2>Ansvarlig</h2>
          <p>
            Vi opptrer seriøst og ansvarlig i alle sammenhenger med fokus på
            helse, miljø og sikkerhet ovenfor våre medarbeidere og
            oppdragsgivere.
          </p>
        </div>
        <div className='service_box_wrapper'>
          <img
            className='service_box_icon'
            src='https://www.datocms-assets.com/41475/1614258140-picture-1wpng.png'
          />
          <h2>Rederlig</h2>
          <p>
            Vi tar vare på menneskene og miljøet rundt oss. Vi skal følge lover,
            regler og etiske retningslinjer, være ærlig, stabil og pålitelig.
          </p>
        </div>
        <div className='service_box_wrapper'>
          <img
            className='service_box_icon'
            src='https://www.datocms-assets.com/41475/1617695905-path-1.png'
          />
          <h2>Kundens suksess</h2>
          <p>
            Vi skal være innovativ og lydhør. På den måten skal vi bidra til å
            forenkle hverdagen til våre lokale kunder. Deres suksess driver vår
            egen suksess.
          </p>
        </div>
       */
}

import React from "react"
import Grid from "@material-ui/core/Grid"

const BoxesSection = (props) => {
  return (
    <Grid className='service_box_main_container' container>
      <Grid
        className='secondSection__content__container'
        justify='center'
        lg={6}
        xs={12}
        md={12}
        item
        container
      >
        <h6 className='smallSectionSubTitle'>OM OSS</h6>
        <h2 className='bigSectionTitle' style={{color:'#fff'}}>Om Instad AS</h2>
        <p className='paraSection'style={{color:'#fff'}} >
          Instad AS ble startet i desember 2019, av Bjarne Jakobsen og Trond
          Erik Stølås. Begge har lang erfaring i bransjen, og målet er å gjøre
          ting enkelt. Enkelt for kunde og samarbeidspartnere, og enkelt for
          våre kandidater/medarbeidere med å bruke det nyeste av teknologiske
          løsninger. Samtidig ønsker vi å skape en lokal forankring i bedriften
          vår. Vi skal være det foretrukne bemanningsselskapet på Vestlandet.
        </p>
      </Grid>
      <Grid
        className='service_box_container'
        container
        direction='row'
        lg={12}
        xs={12}
        md={12}
        item
      >
        {props.boxData.edges.map(({ node: service_box }) => (
          <div key={service_box.id} className='service_box_wrapper'>
            <img alt={service_box.icon.alt} className="service_box_icon" src={service_box.icon.url} />
            <h2>{service_box.title}</h2>
            <p>{service_box.shortDescription}</p>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default BoxesSection

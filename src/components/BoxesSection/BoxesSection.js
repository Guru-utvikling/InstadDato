import React from "react"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import ListSubheader from "@material-ui/core/ListSubheader"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}))

const BoxesSection = (props) => {
  const classes = useStyles()

  return (
    <Grid className='service_box_main_container' container>
      <Grid
        className='secondSection__content__container'
        justify='center'
        lg={6}
        xs={12}
        md={12}
        item
      >
        <h6 className='smallSectionSubTitle'>OM OSS</h6>
        <h2 className='bigSectionTitle'>Om Instad AS</h2>
        <p className='paraSection'>
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
        lg={6}
        xs={12}
        md={12}
        item
      >
        {props.boxData.edges.map(({ node: service_box }) => (
          <div className='service_box_wrapper'>
            <img className="service_box_icon" src={service_box.icon.url} />
            <h2>{service_box.title}</h2>
            <p>{service_box.shortDescription}</p>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default BoxesSection
/*          <GridListTile key='Subheader' cols={2} style={{ height: "auto" }}>
            <ListSubheader component='div'>December</ListSubheader>
          </GridListTile>
          
                      <GridListTile key={service_box.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}

              />
            </GridListTile>
          
          
          */
